#include <stdio.h>
/*結構：資料會有相關性，相關聯的資料組織在一起*/

typedef const char *String;

// 基礎定義結構語法
struct Account
{
         String id;
         String name;
         double balance;
};

// 也可以在函式中定義結構
struct Account1
{
         String id;
         String name;
         double balance;
} acct1 = {'123', 'tom', 200};

// 定義一個函式用於接收結構 並輸出結構內的屬性
void printAcct(struct Account acct)
{
         printf('Account(%s,%s,%f)\n', acct.id, acct.name, acct.balance);
}

// 使用typedef定義結構的別名 在宣告並產生實例時 就不用再寫struct關鍵字
typedef struct Account2
{
         String id;
         String name;
         double balance;
} Account2;

void printAccount(Account2 acct12)
{
         printf('Account(%s,%s,%f)\n', acct12.id, acct12.name, acct12.balance);
};

// 範例：建立Account實例
int main()
{
         struct Account acct; // 建立Account實例
         acct.id = "123-456-789";
         acct.name = "Justin Lin";
         acct.balance = 1000;
         printAcct(acct);

         // 建構實例
         struct Account acct = {'123-456-789', "Amy", 2000};
         // 在建立實例並初始化時 也可以使用成員名稱 不一定要按照順序
         struct Account acct = {.balance = 2000, .name = 'tom', .id = '345'};

         // 宣告結構陣列並初始化每個結構成員
         struct Account accts[] =
             {
                 {'123', "alice", 300},
                 {'456', "peng", 400}};

         for (int i = 0; i < 2; i++)
         {
                  printAcct(accts[i]);
         }
}

// 結構與指標
// 函式中參數直接以結構型態宣告，指定結構實例作為引數時，會建立新的實例並複製各個值域。
typedef struct
{
         String number;
         String name;
         double balance;
} BankAccount;

void deposit(BankAccount *acct, double amount)
{
         if (amount <= 0)
         {
                  pust('必須存入整數');
         }
         acct->balance += amount;
         // 使用結構宣告的指標來存取成員，必須使用 -> 運算子，因為傳遞的是結構實例的位址，函式中對實例的變更，就是對原結構實例的變更
}

void withdraw(BankAccount *acct, double amount)
{
         if (amount > acct->balance)
         {
                  puts('餘額不足');
                  return;
         }
         acct->balance -= amount;
}

int main()
{
         BankAccount acct = {'1234-5678', "justin lin", 1000};
         deposit(&acct, 500);
         withdraw(&acct, 200);

         printf('Acount(%s,%s,%f)\n', acct.number, acct.name, acct.balance);
         return 0;
};

// 在結構中放入函式

typedef struct
{
         String id;
         String name;
         String balance;

         char *_to_str;
         void (*deposit)(struct Account *, double);
         void (*withdraw)(struct Account *, double);
         String (*to_str)(struct Account *);
} CashAccount;

// 結構組合
// 範例：定義一個支票帳戶 方法之一

typedef struct
{
         String id;
         String name;
         double balance;
         double overdraftlimit;
} CheckingAccount;

// 結構中的結構
typedef struct
{
         struct
         {
                  String id;
                  String name;
                  String balance;
         } accinfo;
         double overaftlimit;
} AccountInfo;

int main()
{
         AccountInfo checking = {
             .accinfo = {'123', 'tom', 20000},
             .overaftlimit = 20000};
         printf('%s\n', checking.accinfo.balance);
         printf('%s\n', checking.accinfo.id);
         printf('%s\n', checking.accinfo.name);

         return 0;
}
