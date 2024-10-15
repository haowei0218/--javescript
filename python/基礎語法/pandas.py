import pandas as pd
import numpy as np
import scipy as sp
import matplotlib as mpl
import seaborn as sns

# read file
file1 = pd.read_csv("Salaries.csv")


# list file 5 record
# 顯示前n筆資料
print(file1.head())

# 顯示資料的後n筆資料
print(file1.tail())



# # 顯示資料的資料型態a
# file1['salary'].dtype
#
# file1.columns
# # output file column names
#
# file1.axes
#
# file1.ndim
#
# # 獲取基本統計資訊

information = file1.describe()
print(information['salary'])
# # group by : 將不同群的資料作歸類
# # 平均值:mean
# file1.groupby(['rank'],sort=False)[['salary']].mean
#
# # filtering : 篩選
# file_sub = file1[ file1['salary'] > 120000]
# file_f = file1[ file1['sex'] == 'Female']
#
#
# # slicing : select column salary
# file1['salary']
# print(file_sub[:3])
#
# # select rows by their lables
# file_sub.loc[10:20,['rank','sex','salary']]
#
# file_sort = file1.sort_values(by = 'service')
# file_sort.tail()
#
#
# # true = 由小到大排序, false = 由大到小排序
# file_sort1 = file1.sort_values(by = ['service','salary'],ascending=[True,False])
# file_sort.tail()
#
#
# # 遺失的值:NaN
# flights = pd.read_csv("Salaries.csv")
# flights[flights.isnull().any(axis=1)].head()
