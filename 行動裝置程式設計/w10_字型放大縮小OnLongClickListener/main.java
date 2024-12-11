public MainActivity extends AppCompatActivity implements View.OnclickLisener,View.OnLongClickListener{

         TextView rr;
         Button b1,b2;
         int s = 20;

         protected void onCreate(Bundle savedInstanceState){
                  super.onCreate(savedInstanceState);
                  setContentView(R.layout.activtiy_main);
                  rr=(TextView)findViewById(R.id.res);
                  b1=(Button)findViewById(R.id.b1);
                  b2=(Button)findViewById(R.id.b2);
                  b1.setOnClickListener(this);
                  b2.setOnClickListener(this);
                  rr.setOnLongClickListener(this);
         };
         public void onClick(View view){
                  if(b1 == view)if(s<50){s++;rr.setTextSize(s);rr.setText("字型大小："+s);};
                  if(b2 == view)if(s>20){s--;rr.setTextSize(s);rr.setText("字型大小："+s);};
         };
         public void boolean onLongClick(View view){
                  s=20;
                  rr.setTextSize(s);
                  rr.setText("字型大小"+s);
                  return true;
         };

}