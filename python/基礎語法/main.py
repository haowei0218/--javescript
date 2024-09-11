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