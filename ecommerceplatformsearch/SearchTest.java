public class SearchTest
{
public static void main(String args[])
{
Product[] products={
new Product(1, "Laptop", "Electronics"),
new Product(2, "Mobile", "Electronics"),
new Product(3, "Shoe", "Accessories"),
new Product(4, "Shirt", "Clothing"),
new Product(5, "Ear rings", "Accessories"),
};
int targetId=4;
Product result1=LinearSearch.search(products, targetId);
if(result1!=null)
{
System.out.println("Found using Linear Search: "+result1);
}
else
{
System.out.println("Product not found!!");
}
Product result2=BinarySearch.search(products, targetId);
if(result2!=null)
{
System.out.println("Found using Binary Search: "+result2);
}
else
{
System.out.println("Product not found!!");
}
}
}