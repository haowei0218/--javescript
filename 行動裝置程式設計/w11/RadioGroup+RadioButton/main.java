
public MainActivity extends AppCompatActivity implements View.OnTouchListener,RadioGroup.OnCheckedChangeListener{

         TextView res;
         Button b1,b2;
         int s = 20;
         RelativeLayout rr;
         RadioGroup rg1;
         RadioButton man,wom;
         EditText en1,en2;

         protected void onCreate(Bundle savedInstanceState){
                  super.onCreate(savedInstanceState);
                  setContentView(R.layout.activtiy_main);
                  res=(TextView)findViewById(R.id.res);
                  rr=(RelativeLayout)findViewById(R.id.rr);
                  rg1=(RadioGroup)findViewById(R.id.rg1);
                  en1=(EditText)findViewById(R.id.ed_n1);
                  en2=(EditText)findViewById(R.id.ed_n2);
                  rg1.setOnCheckedChangedListener(this);
         };

         //第一種方法 用RadioGroup
         public void onCheckedChanged(RadioGroup radioGroup,int i){
                  String ss=en1.getText().toString();
                  if(ss.length > 0){
                           //radio button's id
                           if(i == R.id.ra_man1){
                                    res.setText(ss+"先生您好");
                           }
                           //radio button's id
                           if(i == R.id.ra_wom1){
                                    res.setText(ss+"小姐您好");
                           }
                  }
                  else Toast.makeText(this,"姓名為輸入",Toast.LENGTH_SHORT).show();
         }

         //第二種方法 用RadioButton
         public void onCheckedChanged(CompounButton compounButton,boolean b){
                  String ss = en2.getText().toString();
                  if(b){
                           if(ss.length>0){
                                    if(compounButton == man){
                                             res.setText(ss+"先生您好");
                                    }
                                    if(compounButton == wom){
                                             res.setText(ss+"小姐您好");
                                    }
                           }
                           else Toast.makeText(this,"姓名為輸入",Toast.LENGTH_SHORT).show();
                  }
         }
         

};