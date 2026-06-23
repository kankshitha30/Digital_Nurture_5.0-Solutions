public class FinancialForecast{
public static double predictFutureValue(double currentValue, double growthRate, int years)
{
if(years==0)
{
return currentValue;
}
return predictFutureValue(currentValue, growthRate, years-1)*(1+growthRate);
}
public static void main(String args[])
{
double currentValue=20000;
double growthRate=0.20;
int years=7;
double valueOfFuture=predictFutureValue(currentValue, growthRate, years);
System.out.println("Future Value is: "+valueOfFuture);
}
}