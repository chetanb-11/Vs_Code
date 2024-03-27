#include<iostream>
using namespace std;

void fun(int n){
    start:
        if(n == 0){
            return;
        }
        cout<<n<<endl; 
        n -= 1;
    goto start;
}

int sum_of_natural_numbers(int n){
    if(n == 0) return n;
    return n + sum_of_natural_numbers(n-1);
}

bool Palindrome(string arr, int end, int start){
    if(start >= end) return true;
    // if(arr[start] == arr[end]) Palindrome(arr, end-1, start+1);
    // else return false;
    return (arr[start] == arr[end]) && (Palindrome(arr, end-1, start+1));
}

int main(){
    cout<<"Hello World!"
    fun(5);

    cout<<sum_of_natural_numbers(0);
    string arr = "abdcecdba";
    int start = 0;
    int end = arr.length();
    if(Palindrome(arr, end-1, start)) cout<<"\nIt's a Palindrome\n";
    else cout<<"\nNot a Palidrome\n";
    return 0;
}