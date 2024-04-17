#include <stdio.h>
#define len 10
int main(void)
{
         int n = 10;
         printf('n的值：%d\n', n);
         printf('n的位址：%p\n', &n); // & 取址運算子

         // n 的值：10
         // n 的位址：0061FECC

         // 宣告一個指標變數
         // 指標的型態決定了位址上的資料如何解釋，以及如何進行指標運算
         // 資料型態 *ptr;
         // 範例：使用 & 來取得變數 n 的位址，然後指定給指標 p，因此 p 儲存的位址就與 &n 取得的位址相同。
         int *n;
         float *s;
         char *c;
         int *nn, *uu; // 同時宣告兩個指標

         int n1 = 10;
         int *p = &n; // 用＆取出變數的位址並指定給指標變數

         printf('n的位址：%p\n', &n);
         printf('p的儲存位址：%p\n', p);
         // 輸出
         // n 的位址：0061FEC8
         // p 儲存的位址：0061FEC8

         // 範例：使用提取運算子『＊』來提取指標儲存的位址中的資料
         int n2 = 20;
         int *p1 = &n2;

         printf('指標p儲存的值：%p\n', p);
         printf('取出p儲存位址處的值：%d\n', *p);
         // 輸出
         // 指標p儲存的值：0061FEC8
         // 取出p儲存位址處之值：20

         // 如果已經取得記憶體位址 將某值指定給*p3時 該記憶體位址的值也會跟著改變
         // 當指標 p 儲存的位址與變數 n 的位址相同時，對 *p 進行指定，就會將值直接存入該記憶體位置，因此透過變數 n 取出的值也就改變了。

         int n3 = 20;
         int *p3 = &n3;

         printf('n = %d\n', n3);
         prinrf('*p3 = %d\n', *p3);

         *p3 = 30;
         printf('n = %d\n', n3);
         printf('*p3 = %d\n', *p3);
         return 0;

         /* 輸出
         n3 = 20
         *p3 = 20
         n3 = 30
         *p3 = 30
         */

         // 宣告指標但不指定初值 則指標儲存的位址是未知的 存取未知位址的記憶體內容很危險
         int *pp;
         *pp = 50;

         // 宣告指標 並指定一個初值
         int *pp1 = 0;

         // 只儲存記憶體位址
         // void* 型態的指標沒有任何型態資訊，只用來儲存位址，不可以使用 * 運算子對 void* 型態指標提取值
         void *uu;

         int n5 = 30;
         void *prp = &n5;

         //// 轉型為int型態指標並指定給iptr
         int *iptr = (int *)prp;
         printf('%d\n', *iptr);

         // 被const宣告的變數一旦被指定值 就不能再改變變數的值
         const int nnn = 10;
         int *ppp = &n;
         *ppp = 20; //// error, assignment of read-only location

         // 也可以用唯讀的指標 指定一個指標常數 也就是一旦指定給指標值 就不能指定新的記憶體位址值給它
         int x = 10;
         int y = 20;
         int *const p = &x;
         p = &y; // 會有error

         const int x = 10;
         const int y = 20;
         const int *const p = &x;
         p = &y; // 會有error
}

// 指標的運算
int main(void)
{
         /*
         指定運算子=、取址運算子 & 與取值運算子 *
         還有 +、-、++、--、+= 與 -= 等運算子可以使用在指標上。

         在指標運算上加 1 ，是表示前進一個資料型態的記憶體長度，例如在 int 型態的指標上加 1，是表示在記憶體位址上前進 4 個位元組的長度
         宣告的是 double 型態的指標，則每加 1 就會前進 8 個位元組

         減法原理相同
         */

         int *p = 0;
         printf('p位置：%p\n', p);
         printf('p + 1:%p\n', p + 1);
         printf('p + 2:%p\n', p + 2);

         /*輸出
         p 位置：00000000
         p + 1：00000004
         p + 2：00000008
         */

         double *pp = 0;
         printf('p 位置 :%p\n', p);
         printf('p + 1:%p\n', p + 1);
         printf('p+2:%p\n', p + 2);

         /*輸出
         p 位置：00000000
         p + 1：00000008
         p + 2：00000010
         */
}

// 指標與陣列

int main(void)
{
         // 在宣告陣列後 使用到陣列變數 會取得首元素的位址
         int arr[10] = {0};
         printf('arr:\t\t%p\n', arr);
         printf('&arr[0]: \t%p\n', &arr[0]);

         /*輸出
         arr: 0061FEA8
         &arr[0]: 0061FEA8
         */

         int arr1[len] = {10, 20, 30, 40, 50};
         int *p1 = arr1; // 指標變數p會儲存arr1的記憶體位址

         for (int i = 0; i < len; i++)
         {
                  printf('&arr[%d]: %p', i, &arr[i]);
                  printf('\t\tptr + %d: %p\n', i, p1 + i);
         }

         /*
         &arr[0]: 0061FEA0               ptr + 0: 0061FEA0
         &arr[1]: 0061FEA4               ptr + 1: 0061FEA4
         &arr[2]: 0061FEA8               ptr + 2: 0061FEA8
         &arr[3]: 0061FEAC               ptr + 3: 0061FEAC
         &arr[4]: 0061FEB0               ptr + 4: 0061FEB0
         &arr[5]: 0061FEB4               ptr + 5: 0061FEB4
         &arr[6]: 0061FEB8               ptr + 6: 0061FEB8
         &arr[7]: 0061FEBC               ptr + 7: 0061FEBC
         &arr[8]: 0061FEC0               ptr + 8: 0061FEC0
         &arr[9]: 0061FEC4               ptr + 9: 0061FEC4
         */

         // 以指標方式存取
         for (int i = 0; i < len; i++)
         {
                  printf('*(p + %d): %d\n', i, *(p1 + i));
         }
         putchar('\n');

         // 以陣列方式存取
         for (int i = 0; i < len; i++)
         {
                  printf('*(arr + %d): %d\n', i, *(arr + i)); // 用指標運算配合*運算子來取出陣列中的每個元素 也可以配合下標運算子還取出陣列元素
         }

         /*輸出
         *(p + 0): 10
         *(p + 1): 20
         *(p + 2): 30
         *(p + 3): 40
         *(p + 4): 50

         *(arr + 0): 10
         *(arr + 1): 20
         *(arr + 2): 30
         *(arr + 3): 40
         *(arr + 4): 50
         */

         // 計算陣列的長度 sizeof
         int arr3 = {10, 20, 30, 40, 50};
         int lengthArr3 = *(&arr3 + 1) - arr3;
}

// malloc()  free() calloc() realloc()
/*
到目前為止，變數建立後會配置記憶體空間，這類資源是配置在記憶體的堆疊區（Stack），
生命週期侷限於函式執行期間，也就是函式執行過後，配置的空間就會自動清除。

若要將函式執行結果傳回，不能直接傳回這類被自動配置空間的位址，因為函式執行過後，該空間就會釋出，
函式呼叫者後續若透過位址取用這些資源，會發生不可預期的結果，例如，不能直接將區域建立的變數位址或陣列位址傳回。

然而程式運行後，資源之間的互用關係錯綜複雜，有些資源「無法預期」被使用的生命週期，因為無法預期，
也就有賴於開發者自行管理記憶體資源，也就是開發者得自行在需要的時候配置記憶體，
這些記憶體會被配置在堆積區（Heap），不會自動清除，開發者得在不使用資源時自行釋放記憶體
*/

int main(int argc, char *argv[])
{
         // 動態方式配置一個int型態大小的記憶體
         // malloc 會配置一個 int 需要的空間，並傳回該空間的位址，可以使用指標 p 來儲存位址
         int *p = malloc(sizeof(int));

         // 要在配置完成後預設為型態的零值，可以使用 calloc：
         int *p1 = calloc(1, sizeof(int));

         // 釋放記憶體 free()

         // 範例：動態配置
         int *p3 = malloc(100);
         printf('空間位址：%p\n', p);
         printf('儲存的值: %d\n', *p);

         *p3 = 200;
         printf('空間位址:％p\n', p);
         printf('儲存的值: %d\n', *p);

         free(p3);
}
