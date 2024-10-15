import pandas as pd
salaries_file = pd.read_csv('Salaries.csv')
flights_file = pd.read_csv('flights.csv')

# 1. 觀察最後5筆Flights及Salaries資料集中的資料
print(salaries_file.tail())
print(flights_file.tail())

# 2. 計算Flights 及Salaries 二個資料集各自的資料筆數(rows count)
print(salaries_file.shape[0])
print(flights_file.shape[0])

# 3. 計算AssocProf、AsstProf及Prof的服務年資中位數(Median)
Assoc_Prof = salaries_file[ salaries_file['rank'] == 'AssocProf']['service'].median()
Asst_Prof = salaries_file[ salaries_file['rank'] == 'AsstProf']['service'].median()
Prof = salaries_file[ salaries_file['rank'] == 'Prof']['service'].median()
print([Assoc_Prof,Asst_Prof,Prof])

# 4. 計算dep_delay不為NA(空值)的平均航班起飛(dep_delay)延遲時間
filter_delay = flights_file[flights_file['dep_time'].notnull()]['dep_time'].mean()
print(filter_delay)

# 5. 顯示Salaries資料集中第 45~60筆資料的 rank、sex與salary 屬性內容
salaries_file_loc = salaries_file.loc[45:60,['rank','sex','salary']]
print(salaries_file_loc)