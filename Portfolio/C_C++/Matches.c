#include <stdio.h>

int main(void) {
	int t, A, B, F;
	scanf("%d", &t);
	while(t--){
	    scanf("%d %d", &A, &B);
	    int C = A + B;
	    int count = 0;
	    for(int i = 0; C > 10; ++i){
	    F = C % 10;
	    C = C / 10;
    	    switch(F){
    	        case 1:
    	        count = count + 2;
    	        continue;
    	        
    	        case 2:
    	        count = count + 5;
    	        continue;
    	        
    	        case 3:
    	        count = count + 5;
    	        continue;
    	        
    	        case 4:
    	        count = count + 4;
    	        continue;
    	        
    	        case 5:
    	        count = count + 5;
    	        continue;
    	        
    	        case 6:
    	        count = count + 6;
    	        continue;
    	        
    	        case 7:
    	        count = count + 3;
    	        continue;
    	        
    	        case 8:
    	        count = count + 7;
    	        continue;
    	        
    	        case 9:
    	        count = count + 6;
    	        continue;
    	        
    	        case 0:
    	        count = count + 6;
    	        continue;
    	        }
	    }
	    printf("%d\n", count);
	}
	return 0;
}

