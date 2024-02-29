#include <bits/stdc++.h>
using namespace std;

int main() {
	int t = 0, K = 2, N = 7, sum, max;
	while(t--){
	    // cin>>N>>K;
	    int G[N];
	    for(int i = 0; i < N; i++)
	        cin>>G[i];
	    sum = 0;
        max = 0;
	    for(int j = 0; j < N-1; j++)
            for(int l = j; l < K+j; l++){
                sum += G[l];
	        if(sum >= max)
	            max = sum;
        }
	    cout<<max<<endl;
	}
	int s = 1/2;
	cout<<s;

}
