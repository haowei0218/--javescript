// 陣列
// 定義：資料型態 名稱[陣列大小]
#include <stdio.h>
#define LENGTH 10 // define是前置處理器指令
#define row 5
#define column 5

int main(void)
{
         int number[10];   // 宣告一個整數陣列
         double score[10]; // 宣告一個浮點數陣列
         char ascii[10];   // 宣告一個字元陣列

         // 可以使用變數來指定陣列長度
         int len = 0;
         scanf("%d", &len);
         int arr[len];

         // 在宣告變數時尚未決定陣列中的值 將陣列的元素初始值都設定為0
         int numbertest[10] = {0};
         double scoretest[10] = {0.00};
         char ascii[10] = {'\0'};

         // 也可以不宣告陣列長度
         int num2[] = {1, 2, 3};
         double num3[] = {0.2, 0.3, 0.4};
         char ch1[] = {'a', 'b'};

         // 在宣告陣列時初始所有的陣列值
         int numbertest1[4] = {0, 1, 2, 3};
         double scorrtest1[4] = {1.1, 1.2, 1.3, 1.4};
         char asciitest[4] = {'1', '2', '3', '4'};

         // 循環取出陣列元素
         int arr[LENGTH] = {0};
         int i;

         for (i = 0; i < LENGTH; i++)
         {
                  printf('%d', arr[i]);
         }
         putchar('\n');
         for (i = 0; i < LENGTH; i++)
         {
                  arr[i] = i;
         };
         for (i = 0; i < LENGTH; i++)
         {
                  printf('%d', arr[i]);
         }
         putchar('\n');

         // 計算陣列長度
         int num[5] = {1, 2, 3, 4, 5};
         int length = sizeof(num) / sizeof(num[0]);

         for (int i = 0; i < length; i++)
         {
                  printf('%d', num[i]);
         }
         printf('\n');

         // 可以只在陣列中的初始幾個元素
         // 其他未初始的元素 自動為0
         int num1[5] = {98, 56};
         double weight[5] = {0.0, 0.1};
         char ch[5] = {'a', 'b'};

         // 使用const 來修飾陣列 使每個索引位置變成唯讀
         const int num4[] = {1, 2, 3};
         // num4[1] = 10; error:assignment of read-only location 'num4[1]'

         // 不可以將陣列指定為另一個陣列
         int arr[5];
         int arr2[5];
         // arr = arr2

         // 將陣列元素指定給另一個陣列
         // 直接比較兩個陣列是否相同的話，並不是比較其內容，而是比較兩個陣列變數的位址值
         int arr3[LENGTH];
         int arr4[LENGTH];

         for (int i = 0; i < LENGTH; i++)
         {
                  arr3[i] = arr4[i];
         }
}
// 二維陣列

int main(void)
{
         int maze[row][column];        // 宣告一個maze[5][5] 五列五行的二維陣列
         for (int i = 0; i < row; i++) // 循環讀取陣列 並且在每個索引位置添加值
         {
                  for (int j = 0; i < column; i++)
                  {
                           maze[i][j] = (i + 1) * (j + 1);
                  }
         }

         for (int i = 0; i < row; i++) // 循環輸出陣列
         {
                  for (int j = 0; j < column; j++)
                  {
                           printf('%d\t', maze[i][j]);
                  }
                  putchar('\n');
         }

         // 在宣告二維陣列的同時指定二維陣列的值
         int maze[row][column] = {
             {1, 2, 3},
             {4, 5, 6}};
         int maze1[2][3] = {
             1, 2, 3,
             4, 5, 6};

         for (int i = 0; i < row; i++)
         {
                  int *Row = maze[i];
                  for (int j = 0; j < column; j++)
                  {
                           printf('%d\t', maze[j]);
                  }
                  printf('\n');
         }
}

// 字元陣列與字串
// 字串是字元陣列 可以用陣列的方式取出每個字元
int main(void)
{
         // 字串就是一串文字，在 C 談到字串的話，一個意義是指字元組成的陣列，最後加上一個空（null）字元 '\0'
         char text[] = {'h', 'e', 'l', 'l', 'o', '\0'};
         printf('%s\n', text);
         char text1[] = 'hello'; // 也可以直接“”定義

         char *string22 = 'testing'; // 在程式執行時不論在任何地方取得這個字串都是有效的 只可以讀 不可以修改

         //"hello" 是字串字面常量，在這個例子中，雖然沒有指定空字元 '\0'，但是會自動加上空字元
         char text2[] = 'hello';
         int length = sizeof(text2) / sizeof(text2[0]);

         for (int i = 0; i < length; i++)
         {
                  if (text2[i] == '\0')
                  {
                           puts('null');
                  }
                  else
                  {
                           printf('%c', text2[i]);
                  }
         }
         printf('陣列長度%d\n', length);
         printf('字串長度%d', strlen(text));

         // 輸出
         // h e l l o null
         // 陣列長度 6 因為字元陣列在陣列最後一個元素會再加上空字串 所以長度為6
         // 字串長度 5
         return 0;

         // 由使用者輸入取得字串值 使用scanf從使用者輸入取得字串值 並儲存到字元陣列
         char buf[80];
         printf('Enter string:');
         scanf('%s', buf);
         printf('your string : %s\n', buf);

         // 要指定新的字串值
         char stringlist[50];
         stringlist[0] = 'h';
         stringlist[1] = 'e';
         stringlist[2] = 'l';
         stringlist[3] = 'l';
         stringlist[4] = 'o';
}
