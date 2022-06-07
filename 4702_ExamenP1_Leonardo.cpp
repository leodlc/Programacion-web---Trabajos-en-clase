#include <iostream>
#include<stdlib.h>
#include<time.h>
#include <omp.h>
using namespace std;


void segmentar();
void encerar();
void ingresar();
void imprimir();
void multiplicar(int n, double **&A,double **&B, double **&C);
void multiplicarParalelo(int n, int p,double **&A,double **&B,
  double **&C);
void multiplicarRec(int p,int q,int r, double **&A,double **&B,
  double **&C);
void multiplicarParaleloRec(int p,int q,int r,int w,double **&A,
  double **&B, double **&C);

int** matriz;
int	dimen;
void setDimension(int _dimen)
{
	//int** matriz,
	//int	dimen;
	//dimen = _dimen;
}
void segmentar()
{
	//int** matriz;
	//int	dimen;
	matriz = (int**)malloc(dimen * sizeof(int*));
	for (int j = 0; j < dimen; j++)
		*(matriz + j) = (int*)malloc(dimen * sizeof(int));
	for (int i = 0; i < dimen; i++) {
		for (int j = 0; j < dimen; j++) {
			*(*(matriz + i) + j) = 0;
		}
	}
}
void encerar() {
	//int** matriz;
	//int	dimen;
	for (int i = 0; i < dimen; i++) {
		for (int j = 0; j < dimen; j++) {
			*(*(matriz + i) + j) = 0;
		}
	}
	return;
}
void ingresar() {
	//int** matriz;
	//int	dimen;
	srand(time(NULL));
	int dato;

	for (int i = 0; i < dimen; i++)
		for (int j = 0; j < dimen; j++) {
			dato = 1 + rand() % (11 - 1);
			cout << "Posicion de [" << i + 1 << "][" << j + 1 << "]: ";
			cout <<"numero "<< dato << endl;
			*(*(matriz + i) + j) = dato;
		}
}
void imprimir()
{
	//int** matriz;
	//int	dimen;
	for (int i = 0; i < dimen; i++) {
		for (int j = 0; j < dimen; j++)
		{
			cout << *(*(matriz + i) + j);
			printf("%*s", j + 5, "");
		}
		printf("\n");
	}
}
void multiplicar(int n, double **&A,double **&B, double **&C){
  for(int i=0;i<n;i++){
    for(int j=0;j<n;j++){
      C[i][j] = 0.0;
      for(int k=0;k<n;k++){
        C[i][j] = C[i][j] + A[i][k]*B[k][j];
      }
    }
  }
}


void multiplicarParalelo(int n, int p,double **&A,double **&B,
  double **&C){
  #pragma omp parallel
  {
    int first = omp_get_thread_num()*n/p;
    int last = first + n/p;
    for(int i=first;i<last;i++){
      for(int j=0;j<n;j++){
        C[i][j] = 0.0;
        for(int k=0;k<n;k++){
          C[i][j] = C[i][j] + A[i][k]*B[k][j];
        }
      }
    }
  }
}


void multiplicarRec(int p,int q,int r, double **&A,double **&B,
  double **&C){
  for(int i=0;i<p;i++){
    for(int j=0;j<r;j++){
      C[i][j] = 0.0;
      for(int k=0;k<q;k++){
        C[i][j] = C[i][j] + A[i][k]*B[k][j];
      }
    }
  }
}

void multiplicarParaleloRec(int p,int q,int r,int w,double **&A,
  double **&B, double **&C){
  #pragma omp parallel
  {
    int first = omp_get_thread_num()*p/w;
    int last = first + p/w;
    for(int i=first;i<last;i++){
      for(int j=0;j<r;j++){
        C[i][j] = 0.0;
        for(int k=0;k<q;k++){
          C[i][j] = C[i][j] + A[i][k]*B[k][j];
        }
      }
    }
  }
}


int main()
{
	//int** matriz;
	//int	dimen;
	cout << "Ingrese el tamanio de la matriz: " << endl;
	cin >> dimen;
	setDimension(dimen);
	segmentar();
	encerar();
	ingresar();
	imprimir();
	printf("\n\n");
    return 0;
}
