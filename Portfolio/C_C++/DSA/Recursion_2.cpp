#include <bits/stdc++.h>
using namespace std;

void printname(int n)
{
  if (n == 0)
    return;
  cout << "Bucky Barnes" << endl;
  printname(--n);
}

void printton(int i, int n)
{
  if (n < i)
    return;
  printton(i + 1, n);
  cout << i << endl;
}

int sum_of_num(int n)
{
  if (n == 0)
  {
    return 0;
  }
  return n + sum_of_num(n - 1);
}
int factorial(int n)
{
  if (n == 1)
    return 1;
  return n * factorial(n - 1);
}
void reverse_array(int i, int arr[], int n)
{
  if (i >= n / 2)
    return;
  swap(arr[i], arr[n - i - 1]);
  reverse_array(i + 1, arr, n);
  // return 0;
}
bool check_palindrome(int i, string &str)
{
  if (i >= str.size() / 2)
    return true;
  if (str[i] != str[str.size() - i - 1])
    return false;
  return check_palindrome(i + 1, str);
}
int fibonacci(int n)
{
  if (n <= 1)
    return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
int main()
{
  int arr[] = {1, 2, 3, 4, 5};
  int n = sizeof(arr) / sizeof(arr[0]);
  string str = "MADAM";
  printname(5);
  printton(1, 5);
  cout << "Sum of N numbers is: " << sum_of_num(3) << endl;
  cout << "Factorial of N is: " << factorial(5) << endl;
  reverse_array(0, arr, n);
  for (int i = 0; i < n; i++)
    cout << arr[i] << " ";
  cout << endl;
  cout << check_palindrome(0, str)<<endl;
  cout << fibonacci(1);
  return 0;
}
