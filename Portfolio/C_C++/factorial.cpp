#include<iostream>
using namespace std;

int factorial(int i){
    int product = 1;
    for(int j = 1; j <= i; j++){
        product *= j;
    }
    return product;
}

int main(){

    int num; 
    cin>>num;

    cout<<factorial(num);

    return 0;
}