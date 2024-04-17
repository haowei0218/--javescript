#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <errno.h>
#define len 80

int main(void)
{

         // 取得字串的長度 strlen
         size_t strlen(const char *str);

         char buf[40];
         puts('enter the string');
         scanf('%s', buf);
         size_t length = strlen(buf);
         printf('字串長度：%lu\n', length);
         // 輸出
         // 請輸入字串...
         // Justin
         // 字串長度：6
         fgets(buf, sizeof(buf) / sizeof(buf[0]), stdin); // 使用 fgets 的話，要注意它會包括最後按下 Enter 的換行字元

         // 複製字串:strcpy 函式 ,若要複製字串中若干字元內容，可以使用 strncpy：
         // 參數：來源字串複製到目的字串 , size_t 則是限制最多可以複製的字元個數
         // char *strcpy(char *restrict dest, const char *restrict src);
         // char *strncpy(char *restrict dest, const char *restrict src, size_t count)

         // 串接字串:strcat 函式
         // char *strcat( char *restrict dest, const char *restrict src );
         // char *strncat( char *restrict dest, const char *restrict src, size_t count );
         // 第二個參數的字串會串接到第一個參數

         char str1[] = 'abc';
         char str2[] = 'def';

         int Len = strlen(str1) + strlen(str2) + 1;
         char concated[Len];
         memset(concated, '\0', Len);
         strcat(concated, str1);
         strcat(concated, str2);
         printf('串接後:%s\n', concated);
}

// 字串的比較與搜尋
int main(void)
{
         // 字串的比較： strcmp and strncmp
         // strcmp(str1,str2) 會比較字串的大小 相同則輸出0 , str1 > str2 則回傳大於0的值 小於則回傳小於0的值
         // 範例：比較兩個字串指定長度內的字元是否相同
         char password[] = '123456';
         char buf[len];

         printf('enter the password');
         fgets(buf, len, stdin);

         if (strncmp(password, buf, 6) == 0)
         {
                  puts('password is correct');
         }
         else
         {
                  puts('password is incorrect');
         }

         // 搜尋字串：strstr(const char* str, const char* substr)
         // 參數：第一個參數：被搜尋的字串 第二個參數：想要搜尋的字串
         // 沒找到字串：傳回null, 搜尋到第一個符合的子字串:傳回符合位置的指標
         // 若想要得知子字串是在哪一個索引位置，則可以利用該指標減去字串（字元陣列）開頭的指標，得到的位移量即為符合的索引位置

         char source[len];
         char search[len];
         printf('enter the string');
         fgets(source, len, stdin);

         printf('搜尋子字串');
         fgets(search, len, stdin);
         search[strlen(search) - 1] = '\0'; // 去除最後的換行字元

         char *loc = strstr(source, search);
         if (loc == NULL)
         {
                  printf('找唔到符合的子字串');
         }
         else
         {
                  printf('在索引位置％lu處找到子字串\n', loc - source);
         }
         // 輸入字串：How do you do?
         // 搜尋子字串：you
         // 在索引位置 7 處找到子字串

         // strspn:用來比較兩個字串 找出兩個字串中開始不匹配的地方
         // size_t strspn(const char *dest, const char *src)
         // 會傳回兩個字串開始不匹配的第一個字元索引位置，否則傳回 0

         char str3[len];
         char str4[len];

         printf('enter the string');
         fgets(str3, len, stdin);

         printf('search person string');
         fgets(str4, len, stdin);

         str3[strlen(str3) - 1] = '\0';
         size_t loc = strspn(str3, str4);
         if (loc == strlen(str3))
         {
                  printf('yes');
         }
         else
         {
                  printf('no');
         }

         // 輸入字串：How do you do?
         // 搜尋子字串：How do joe do?
         // 從索引位置 7 處開始不匹配

         // strchr:找出字串中的指定字元第一次出現，若找到則傳回該字元的指標，否則傳回 NULL
         // char *strchr( const char *str, int ch );
         // char *strrchr( const char *str, int ch );

         // strscpn:找出一個字串中與另一個字串任何字元第一次匹配的索引位置，若無則傳回字串長度
         // size_t strcspn( const char *dest, const char *src );

         char str5[len];
         char str6[len];
         printf('enter the string');
         fgets(str5, len, stdin);

         printf('search the person string');
         fgets(str6, len, stdin);

         str6[strlen(str6) - 1] = '\0';
         size_t loc = strscpn(str5, str6);

         if (loc == strlen(str5))
         {
                  printf('沒有任何字元匹配');
         }
         else
         {
                  printf("索引位置 %lu 處匹配到字元\n", loc);
         }
         // 輸入字串：How do you do?
         // 搜尋子字串：wo
         // 索引位置 1 處匹配到字元

         // strpbrk:與 strcspn 類似，只不過完全不匹配的話，則傳回 NULL

         char string[len];
         char string1[len];

         printf('enter the string');
         fgets(string, len, stdin);

         printf('enter the person string');
         fgets(string1, len, stdin);

         string1[strlen(string1) - 1] = '\0';

         size_t loc = strpbrk(string, string1);

         if (loc == NULL)
         {
                  printf('不匹配');
         }
         else
         {
                  printf('匹配');
         }
}

// 字串轉換 測試
int main(void)
{
         // 第一個參數都接受來源字串；第二個參數在函式執行過後，會用來儲存字串中第一個無法剖析為數字的字元位址，
         // 如果設定為 NULL，會忽略這個參數；
         // 第三個參數用來指定基底，如果設定為 0，從字串中自動偵測基底；函式若沒有可轉換的字串，會傳回 0
         long strtol(const char *restrict str, char **restrict str_end, int base);
         long long strtoll(const char *restrict str, char **restrict str_end, int base);

         unsigned long strtoul(const char *restrict str, char **restrict str_end, int base);
         unsigned long long strtoull(const char *restrict str, char **restrict str_end,
                                     int base);
         float strtof(const char *restrict str, char **restrict str_end);
         double strtod(const char *restrict str, char **restrict str_end);
         long double strtold(const char *restrict str, char **restrict str_end);

         printf("\"1010\"\t二進位：\t%ld\n", strtol("1010", NULL, 2));
         printf("\"12\"\t八進位：\t%ld\n", strtol("12", NULL, 8));
         printf("\"A\"\t十六進位：\t%ld\n", strtol("A", NULL, 16));
         printf("\"012\"\t自動基底：\t%ld\n", strtol("012", NULL, 0));
         printf("\"0xA\"\t自動基底：\t%ld\n", strtol("0xA", NULL, 0));
         printf("\"junk\"\t自動基底：\t%ld\n", strtol("junk", NULL, 0));
         // 輸出
         //"1010"  二進位：        10
         //"12"    八進位：        10
         //"A"     十六進位：      10
         //"012"   自動基底：      10
         //"0xA"   自動基底：      10
         //"junk"  自動基底：      0

         // 轉換結果超出了傳回型態的範圍，會將定義在 errno.h 的 errno 設為 ERANGE，並傳回各自傳回型態的最大可容許數值（最大值或最小值）
         long i = strtol('99999999999999999999999999999999999999', NULL, 10);
         if (errno == ERANGE)
         {
                  printf('超出轉換範圍');
         }
         else
         {
                  printf('%d', i);
         }
}