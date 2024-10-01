# 在控制台輸出
print('hello world')
print(1)
print([1,2,3,4,5])
print({"name":"john","age":18})

# 變數：是儲存資料的容器
# 合法的變數名稱：
# 變數名必須以字母或底線字元開頭
# 變數名不能以數字開頭
# 變數名稱只能包含字母數字字元和底線（Az、0-9 和 _）
# 變數名稱區分大小寫（age、Age 和 AGE 是三個不同的變數）
# 變數名不能是任何Python 關鍵字。

num = 1
str1 = "string"
obj1 = {"name":"john","age":18 }
arr1 = [1,2,3,4,5,6]
print([num,str1,obj1,arr1])

# 強制指定變數的資料類型

num1 = 1
num2 = str(num1) 
num3 = int(num1)
num4 = float(num1)

# 使用type()獲取變數資料類型
print([type(num1),type(num2),type(num3),type(num4)])

# 變數會區分大小寫 下列將創建兩個變數
abc = 'abc'
ABC = 'ABC'

# 多個變數賦值
x,y,z = 'orange','banana','cherry'
print([x,y,z])

# 一個值對應多個變數
x1 = x2 = x3 = 'apple'
print([x1,x2,x3])

# 解壓縮集合 並將值提取到變數中
fruits = ['apple','banana','cherry']
y1,y2,y3 = fruits
print(y1)
print(y2)
print(y3)


# 輸出變數
y11 = 3
y22 = 4
y33 = 5
print(y11,y22,y33)


# 變數分為區域變數與全域變數
# 以下範例中 name為全域變數 任何function都可以使用這個變數
name = "john"
def SayHello(str):
         return f"hello {str}"

SayHello(name)


# 以下範例中 x,y為區域變數 只有在AddNumber()內才可以使用這個變數
def AddNumber():
        x = 10
        y = 11
        return x + y
AddNumber()

# 資料類型
x = 'hello python'
x = 20
x = 20.5 
x = 1j
x = ['apple','banana','cherry']
x = ('apple','banana','cherry')
x = range(6)
x = {"name":"john","age":20}
x = {'apple','banana','cherry'}
x = True
x = b"Hello"
x = bytearray(5)
x = memoryview(bytes(5))
x = None

# str,int,float,complex,list,tuple,range,dict,set,frozenset,bool,bytes,bytearray,memoryview,NoneType

# Number 類型轉換
x = 1
y = 2.9
z = 2j

a = float(x)
b = int(y)
c = complex(z)


# String
a = "hello world"

# 使用index可以取出字串中的字元
b = a[1]
c = a[2]


# 使用for迴圈循環字串
for x in 'banana':
        print(x)

# 輸出:
# b
# a
# n
# a
# n
# a

# 字串長度 len()
a = 'hello world'
print(len(a))

# 檢查字串中是否存在某個字元 輸出True or False
txt = "the best things in life are free"
print("free" in txt)

# 使用if
text = 'the best things in life are free'
if "free" in txt:
        print("yes, 'free' is present")

# 使用 not in 輸出True or False
text1 = "the best things in life are free"
print('expensice' not in text1)

# 使用if
if "expensive" not in text1:
        print("No, 'expensive' is Not present")


# 切割字串 可以指定開始與結束位置 以冒號分隔
# 取開始位置到結束位置的字元 但不包括結束字元
string = 'hello world'
print(string[1:4])
# 輸出 ell

# 若省略起始位置 則範圍將從第一個字元開始
string = 'good morning'
print(string[:5])
# 輸出good


# 若省略結束位置 則範圍到最後一個字元
string = 'good morning'
print(string[3:])
# 輸出d morning

# 負索引 從字串末尾開始切割
string = 'hello world'
print(string[-5:-2])
# 輸出 orl



# 修改字串

# 大寫 upper()
a = 'hello world'
print(a.upper())
# 輸出 HELLO WORLD

# 小寫 upper()
a = 'HELLO WORLD'
print(a.lower())
# 輸出 hello world

# strip() 刪除開頭與結尾的空格
a = ' hello world '
print(a.strip())
# 輸出 "hello world"

# replace() 替換字串
a = 'hello world'
print(a.replace('h','j'))
# 輸出 jello world

# split() 指定在字串中的某個字元做為分隔 並回傳一個陣列
a = 'hello, world'
print(a.split(',')) 
# 輸出 ['hello' , 'world']

# 用＋號可以連結字串
a = 'hello'
b = 'world'
c = a + b
print(c)
# 輸出helloworld

# python 轉義字符 
# 若要在字串中插入非法字符，請使用轉義字符。
# 轉義字元是一個反斜杠\，後面跟著要插入的字元。
txt = "We are the so-called \"Vikings\" from the north"

# 布林值: 評估值和變數 bool()
# bool()函數允許評估任何值 並回傳True or False
print(bool("hello "))
print(bool(15))
# return True True

# 評估兩個變數
x = 'hello'
y = 15
print(bool(x))
print(bool(y))
# return True True

# 幾乎任何值都會被評估為Tru是否包含某種內容
# 除空字串外 任何字串都是True
# 除了0之外 任何數字都是True
# 任何列表 元組 集合 字典都是True 除了空的
# 以下將返回False
bool(False)
bool(None)
bool(0)
bool("")
bool(())
bool([])
bool({})


# 邏輯運算符
# and : x < 5 and x < 10
# or : x > 10 or x > 9
# not : not(x < 5 and x < 10)

# 身份運算符
# is: x is y
# is not : x is not y

# 成員資格運算符
# in : x in y
#  not in : x not in y


# lambda 是一個匿名函數 
# 可以接受任意數量的參數 但只能有一個表達式
# 語法: lambda argument : expression
# argument = 任意數量的參數 , expression = 表達式 會return一個值


ReNumber = lambda num : num * 10
print(ReNumber(10))

MutNumber = lambda num1,num2 : num1 * num2
print(MutNumber(40,50))

# 將lambda用作另一個函數的匿名函數
# mydoubler = myFunc(2) === lambda a : a * 2
# print(mydoubler(20)) === lambda 20 : 20 * 2 === 40
def myFunc(n):
        return lambda a:a*n

mydoubler = myFunc(2) 
print(mydoubler(20))

# 在同一個程式中使用相同的函數定義建立兩個函數
def myFunc1(n):
        return lambda a : a * n

mydoubler = myFunc1(2)
mytripler = myFunc1(3)

print(mydoubler(20)) 
print(mytripler(20))



# 類別/物件
# 使用_init_()函數位年齡與姓名賦值
# 使用_str_()函數控制當類別物件表示為字串時應傳回的內容
# 物件內的函數稱為一個物件的方法
# 自我參數:參數self是對類別的當前實例的引用 用於存取屬於該類別的變數
# 可以用其他變數替代self
# class定義不可為空 可以放入pass避免錯誤
class Person:
        def __init__(self,name,age):
                self.name = name
                self.age = age
        def __str__(self):
                return f"name:{self.name} age:{self.age}"
        def helloName(self):
                print(f"hello{self.name}")

class Student:
        def __init__(mystudent,name,number):
                mystudent.name = name
                mystudent.number = number
                

# 修改物件屬性
person1 = Person("john",20)
person1.age = 40

# 刪除物件屬性
del person1.age

# 刪除對象
del person1

# 放入pass避免錯誤
class Car:
        pass
