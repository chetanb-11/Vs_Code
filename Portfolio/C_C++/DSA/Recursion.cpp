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

void sum_of_digits(int n, int sum){
    if(n<=0){
        cout<<sum<<endl;
        return;
    }
    sum += n%10;
    sum_of_digits(n/10, sum);
}

int rope_cutting(int n, int a, int b, int c){
    if(n == 0) return 0;
    if (n<0) return -1;
    int res = max(rope_cutting(n-a, a, b, c), max(rope_cutting(n-b, a, b, c), rope_cutting(n-c, a, b, c)));
    if(res == -1) return -1;
    return res+1;
}

void subsets(string s, string curr = "", int i = 0){
    if(i == s.length()){
        cout<<curr<<" ";
        return;
    }
    subsets(s, curr, i+1);
    subsets(s, curr + s[i], i+1);
}

int tower_of_hanoi(int n, int res = 0){
    if(n == 1) res = 1;
    tower_of_hanoi(n-1, 2*n+1);
}

int main(){
    cout<<"Hello World!";
    fun(5);

    cout<<sum_of_natural_numbers(0);
    string arr = "abdcecdba";
    int start = 0;
    int end = arr.length();
    if(Palindrome(arr, end-1, start)) cout<<"\nIt's a Palindrome\n";
    else cout<<"\nNot a Palidrome\n";
    cout<<"sum of digits of number"<<endl;
    sum_of_digits(50125, 0);
    cout<<rope_cutting(28, 5, 11, 12)<<endl;
    subsets("ABC");
    cout<<tower_of_hanoi(3);
    return 0;
}