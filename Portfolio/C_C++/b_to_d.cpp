#include<iostream>
#include<math.h>
using namespace std;

int decimal(int num){
    int decimal = 0;
    for(int i = 0; num > 0; i++){
        int F = num % 10;
        num /= 10;
        decimal = decimal + (F * pow(2, i));
    }
    return decimal;
}

int main(){

    int binary_num;
    cin>>binary_num;

    cout<<decimal(binary_num)<<endl;

    return 0;
}