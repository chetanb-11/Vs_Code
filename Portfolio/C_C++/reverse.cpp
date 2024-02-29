#include<iostream>
using namespace std;

int main(){

    #ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);
    #endif

    int num;
    
    cin>>num;

    int reverse = 0;
    while(num > 0){
    int F = num % 10;
    reverse = (reverse*10 + F); 
    num /= 10;
    }

    cout<<reverse<<endl;

    return 0;
}