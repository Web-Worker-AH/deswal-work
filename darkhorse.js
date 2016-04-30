var myImage = document.getElementById("first");
                var imageArray =["images/first_image.jpg","images/images-30.jpg","images/images-24.jpg","images/images-25.jpg","images/images-26.jpg","images/images-28.jpg","images/images-29.jpg"];
                var imageIndex = 0;
                function changeImage() {
                myImage.setAttribute("src",imageArray[imageIndex]);
                imageIndex++;
                if (imageIndex>=imageArray.length)
                {
                    imageIndex = 0;
                }
                }
                var interval = setInterval(changeImage,1000);
                myImage.onclick=function()
                {
                    clearInterval(interval);
                }
                myImage.ondblclick = function()
                {
                var interval = setInterval(changeImage,1000);
                    
                    
                }
var student = document.getElementById("student_1");
                var studentArray =["images/1.png","images/2.png","images/3.png"];
                var studentIndex = 0;
                function changeStudentImage() {
                student.setAttribute("src",studentArray[studentIndex]);
                studentIndex++;
                    if (studentIndex>=studentArray.length)
                    {
                        studentIndex= 0;
                    }
                }
                var interval = setInterval(changeStudentImage,3000);
                student.onclick=function()
                {
                    clearInterval(interval);
                }
                student.ondblclick = function()
                {
                var interval = setInterval(changeStudentImage,1000);
                  
                }
function closeNav()
{
                    document.getElementById("myNav").style.width="0%"
}
function openNav()
{
                    document.getElementById("myNav").style.width="100%"
                }