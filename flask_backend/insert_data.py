import pymysql.cursors
from flask_backend.config import aws_rds

def process(job):
    connection = pymysql.connect(host=aws_rds.HOST,
                                 user=aws_rds.USER,
                                 password=aws_rds.PASSWORD,
                                 db=aws_rds.DB,
                                 port=aws_rds.PORT,
                                 cursorclass=pymysql.cursors.DictCursor)

    try:
        with connection.cursor() as cursor:
            sql = "INSERT INTO `JobDescriptions` (`CompanyName`,`Role`,`Location`,`LinkedinLink`,`CompanyAppLink`,`Description`,`LogoUrl`) VALUES (%s, %s, %s, %s, %s, %s, %s)"
            cursor.execute(sql, (job.companyName, job.role, job.location, job.linkedinLink, job.companyAppLink, job.description, job.logoUrl))
            result = cursor.fetchall()
            print(result)

        connection.commit()
    except:
        print("unable to connect to database")
    finally:
        connection.close()

