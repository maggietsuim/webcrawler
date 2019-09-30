from selenium import webdriver
from temp.schema import JobDescription
from temp import receive_data
import re
from flask_backend.config import linkedin_creds

driver = webdriver.Chrome('../flask_backend/chromedriver')
driver.get('https://www.linkedin.com')

sign_in_button = driver.find_element_by_class_name('nav__button-secondary')
sign_in_button.click()

username = driver.find_element_by_id('username')
username.send_keys(linkedin_creds.USERNAME)

password = driver.find_element_by_id('password')
password.send_keys(linkedin_creds.PASSWORD)

log_in_button = driver.find_element_by_class_name('login__form_action_container')
log_in_button.click()

list = []
prev_list_len = -1

# TODO: navigate multiple pages
driver.get('https://www.linkedin.com/jobs/search/?f_E=1&geoId=90000084&keywords=software%20engineer&location=San%20Francisco%20Bay%20Area')

while len(list) != prev_list_len:
    prev_list_len = len(list)
    list = driver.find_elements_by_xpath('//h3/a[starts-with(@href, "/jobs/view")]')
    list[len(list)-1].click()

links = []
for i in range(0, len(list)):
    links.append(list[i].get_attribute("href"))

for i in range(0, len(links)):
 driver.get(links[i])

 see_more_button = driver.find_element_by_xpath('//div[@class="cta-wrap ember-view"]')
 see_more_button.click()

 job = JobDescription()

 try:
  companyName = driver.find_element_by_xpath('//a[starts-with(@class,"jobs-top-card__company-url")]')
  job.companyName = companyName.text
 except:
  print("no company name")

 try:
  role = driver.find_element_by_xpath('//h1[@class="jobs-top-card__job-title t-24"]')
  job.role = role.text
 except:
  print("no role")

 location = ""

 try:
  location = driver.find_element_by_xpath('//a[starts-with(@class,"jobs-top-card__exact-location")]')
 except:
  print("no first element")

 if not location:
  try:
   location = driver.find_element_by_xpath('//span[@class="jobs-top-card__bullet"]')
  except:
   print("no second")

 job.location = location.text

 job.linkedinLink = links[i]

 externalLink = ""

 try:
  companyAppLink = driver.find_element_by_xpath('//button[starts-with(@class, "jobs-apply-button")]')
  if companyAppLink.text == 'Easy Apply':
   externalLink = "Easy Apply"
  else:
   companyAppLink.click()
   driver.switch_to.window(driver.window_handles[1])
   externalLink = driver.current_url
   driver.close()
   driver.switch_to.window(driver.window_handles[0])
  # may or may not have continue button (share profile)
  try:
   continue_button = driver.find_element_by_xpath('//div[starts-with(@class, "jobs-apply-button--share")]')
   continue_button.click()
  except:
   print("no continue button")
 except:
  print("no company app link")

 job.companyAppLink = externalLink

 try:
  res = driver.find_elements_by_id("job-details")
  inner_html = res[0].get_attribute('innerHTML')
 except:
  print("no description")

 job.description = re.sub(r'(?is)<!---->|<br>|<br />|&nbsp;|<span>|</span>|\n', "", inner_html)

 job.logoUrl = ""

 receive_data.process(job)

driver.close()
driver.quit()


