from jedi.api.refactoring import inline
from mpl_toolkits.mplot3d.proj3d import rotation_about_vector

import numpy as np
import pandas as pd
from matplotlib import pyplot as plt

data = [50,50,47,97,49,3,53,42,26,74,82,62,37,15,70,27,36,35,48,52,63,64]
grades = np.array(data)

study_hours = [10.0,11.5,9.0,16.0,9.25,1.0,11.5,9.0,8.5,14.5,15.5,
               13.75,9.0,8.0,15.5,8.0,9.0,6.0,10.0,12.0,12.5,12.0]

student_data = np.array([study_hours, grades])
df_students = pd.DataFrame({'Name': ['Dan', 'Joann', 'Pedro', 'Rosie', 'Ethan', 'Vicky', 'Frederic', 'Jimmie',
                                     'Rhonda', 'Giovanni', 'Francesca', 'Rajab', 'Naiyana', 'Kian', 'Jenny',
                                     'Jakeem','Helena','Ismat','Anila','Skye','Daniel','Aisha'],
                            'StudyHours':student_data[0],
                            'Grade':student_data[1]})


# 建立視覺化統計圖表 :長條圖
plt.bar(x=df_students.Name,height=df_students.Grade)

# 顯示圖表
plt.show()

# 建立一個較容易讀的統計圖表
# figure = 調整整個統計圖表長寬比例的內建函式
fig = plt.figure(figsize=(8,5))
plt.bar(x=df_students.Name,height=df_students.Grade, color='orange')
plt.title('Student Grades')
plt.xlabel('Student')
plt.ylabel('Grade')
plt.grid(color='#95a5a6', linestyle='--' , linewidth=2 , axis='y' , alpha=0.7)
plt.xticks(rotation=90)
plt.show()

# 建立多個圖表
# create a figure for 2 subplots

# create a bar plot of name vs grade on the first axis
fig,ax = plt.subplots(1,2,figsize=(10,5))
ax[0].bar(x=df_students.Name,height=df_students.Grade, color='orange')
ax[0].set_title('Grades')
ax[0].set_xticks(range(len(df_students.Name)))
ax[0].set_xticklabels(df_students.Name, rotation=90)

# create a pie chart of pass counts on the second axis
df_students['Pass'] = df_students['Grade'] >= 60
pass_counts = df_students['Pass'].value_counts()
ax[1].pie(pass_counts, labels=pass_counts)
ax[1].set_title('Passing Grades')
ax[1].legend(pass_counts.keys().tolist())


# add a title to the figure
fig.suptitle('Student Data')
fig.show()