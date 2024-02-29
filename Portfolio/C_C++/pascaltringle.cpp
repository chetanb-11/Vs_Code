#include<iostream>
using namespace std;

int factorial(int n){
    int fact = 1;
    for(int i = 1; i <= n; i++){
        fact *= i; 
    }
    return fact;
}

int main(){

    int i;
    cin>>i;

    for(int A = 0; A < i; A++){
        for(int B = 0; B <= A; B++){
            cout<<factorial(A)/(factorial(A-B)*factorial(B))<<" ";

        }
        cout<<endl;
    }

    return 0;
}