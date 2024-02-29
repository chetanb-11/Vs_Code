#include<iostream>
using namespace std;

int fibonacci(int A){
    if(A<=1){
        return A;
    } else{
        return fibonacci(A-1) + fibonacci(A-2);
    }

}

int main(){

    int num;
    cin>>num;

    for(int i = 0; i < num; i++){
        cout<<fibonacci(i)<<endl;;
    }

    return 0;
}