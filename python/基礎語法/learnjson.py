import json

# json是一種用於儲存和交換資料的語法
# json是文本 用javascript表示法寫

# 從json ==> python, use json.loads()

x = '{"name":"john","age":30 , "city":"new york"}'
y = json.loads(x)
print(y["age"])

# python ==> json
x = {
         'name':"john",
         "age":30,
         "city":"new york"
}

y = json.dumps(x)
print(y)

# 將python物件 ==> json
print(json.dumps({'name':'john',"age":30}))
print(json.dumps(['apple','banana']))
print(json.dumps(('apple','bananas')))
print(json.dumps('hello'))
print(json.dumps(40))
print(json.dumps(True))


# 轉換包含所有合法資料的python物件
x1 = {
         'name':'john',
         'age':'30',
         'married':True,
         'divorced':False,
         'children':('ann','billy'),
         'pets':None,
         "cars":[
                  {'model':"230","mpg":24.5},
                  {'model':"232","mpg":33.5}
         ]
}
print(json.dumps(x1))

# 設定格式：json.dumps()具有參數 可以輕鬆讀取結果
json.dumps(x1,indent=4)

# 定義分隔符號
json.dumps(x,indent=4,separators=(". "," = "))

# 設定排序
json.dumps(x,indent=4,sort_keys=True)