# 列表用於在單一變數中儲存多個項目
# 列表是python中用於儲存資料集合的四種內建資料類型之一 其他三種是tuple, set, dictionary
# 列表項是有序的 可更改的 允許重複值的
# 列表內可以是任何資料類型


# create a list

thislist = ['apple',1,{"name":'john'},[1,2,3,4],True,False,None]
print(thislist)

# 索引:index
# 負索引表示從列表末尾開始 -1 = 最後一項, -2 = 倒數第二項
# thislist[1:2] 指定索引的起始位置與終點位置
# 省略起始位置 表示從列表的開頭開始
# 省略末尾位置 表示從列表的開頭開始
# 檢查元素是否在列表內
thislist[1]
print(thislist[0])
print(thislist[-1]) 
print(thislist[1:3])
print(thislist[:3])
print(thislist[1:])
if 'appl' in thislist:
  print("Yes")
else:
  print('no')



# 列表長度
print(len(thislist))


# Use list()建構函數
thislist1 = list(('apple','banana','cherry'))
print(thislist1)


# change list value
# change a range of item value
# 如果插入的值多於被替換的項目 新項目將插入您指定的位置
# 如果插入的少於被替換的項目喔則新項目將插入您指定的位置 並且其餘項目將相應移動
thislist2 = [1,2,34,4]
thislist2[1] = 3
print(thislist2)
thislist2[0:2] = [5,6]
print(thislist2)
thislist2[1:2] = [10,11]
print(thislist2)
thislist2[1:3] = [12]
print(thislist2)


# 插入新項目且不替換任何現有值
# 在指定索引處插入一個項目
thislist3 = [1,2,3,4]
thislist3.insert(2,5)
print(thislist3)



# 新增一個值進入列表
thislist4 = [1,2,4,5]
thislist4.append('apple')
print(thislist4)

# 擴充列表
thislist4.extend(thislist3)
print(thislist4)

# 刪除元素
thislist4.remove('apple')
print(thislist4)

# 刪除指定索引
thislist4.pop(1)
print(thislist4)
del thislist4[0]
print(thislist4)

# 完全刪除清單
del thislist3

# 清除列表的元素 clear()
thislist2.clear()
print(thislist2)

# 循環list
for x in thislist4:
  print(x)

for i in range(len(thislist4)):
  print(thislist4[i])

i = 0
while i < len(thislist4):
  print(thislist4[i])
  i += 1

[print(x) for x in thislist4]


# 列表理解 
fruits = ['apple','banana','mango']
newlist = []
for x in fruits:
  if 'a' in x:
    newlist.append(x)
print(newlist)
newlist1 = [x for x in fruits if 'a' in x]

# 文法 [expression for item in iterable if condition == true]

# 僅接受小於5的數字
newlist2 = [item for item in thislist4 if item < 5]

# 排序
thislist4.sort()
print(thislist4)

# 降序排序
thislist4.sort(reverse=True)
print(thislist4)


# 自訂排序功能
# 可以使用關鍵字 key = function
# 根據數字與50的接近程度對清單排序

def myfunc(n):
  return abs(n - 50)

thislist4.sort(key=myfunc)
print(thislist4)


# 不區分大小寫排序
thislist5 = ['apple','Banana',"Cat"]
thislist5.sort(key = str.lower)
print(thislist5)

# 反轉清單的順序
thislist5.reverse()
print(thislist5)

# 複製列表
thislist6 = thislist5.copy()
print(thislist6)