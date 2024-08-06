# Reg_Form_submission
A Registration Form, which will take data from user and store it on database(Mysql).  
In this short project i have created a index.html, styles.css, validate.js and register.php script.
Via html i created the page and used css to style it. used javascript to validate the correct format of the form and it's fields (like 1st name can't be less than 6 digit, ph no should be 10 like that.)
php i have used to interact with database so the details user enter via form can be submitted to the database. for database i am using Apache (xampp server) and mysql.
once you download the files, please install xampp server and start the apache and mysql also install mysql on your system. 
once all done, put the files under dirctory where you installed xampp under htdocs folder. 
go to browser and try to acces the html form via localhost(it can be like: http://localhost/index.html)
submit the form, and go to mysql console and check the data.
Note: you have to create the database 1st and table as well, in which table the user inputs will be stored. 
Tip: create a database named "WIMS2021" and table under it "users". also when install mysql remember the password as you have to chnage the password at php script.
if wished you can change the database and table name as well in php script.
