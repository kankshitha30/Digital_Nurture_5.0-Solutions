package singletonpatternexample;
public class SingletonTest{
public static void main(String[] args){
Logger logger1=Logger.getInstance();
Logger logger2=Logger.getInstance();
logger1.log("This is my first message");
logger2.log("This is my second message");
if(logger1==logger2)
{
System.out.println("There is only one logger instance");
}
else
{
System.out.println("Multiple logger instances exist");
}
}
}