#include <stdio.h>
#include <math.h>

int main() {
  
  double x1, x2, d, y1, y2; 
  int radius;

  // Get center point  
  printf("Enter coordinates of center: ");
    scanf("%lf %lf", &x1, &x2);

  printf("Enter coordinates of point: ");
  scanf("%lf %lf", &y1, &y2);  

  printf("Enter radius of circle: ");
  scanf("%d", &radius);

  d = sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1));

  if(d <= radius) printf("Point lies inside the circle\n");
  else if(d == radius) printf("point lies on circle");
  else printf("Point lies outside the circle\n"); 
  

  return 0;
}