public MainActivity extends AppCompatActivity implements View.OnTouchListener{

         TextView res;
         Button b1,b2;
         int s = 20;
         RelativeLayout rr;

         protected void onCreate(Bundle savedInstanceState){
                  super.onCreate(savedInstanceState);
                  setContentView(R.layout.activtiy_main);
                  res=(TextView)findViewById(R.id.res);
                  rr=(RelativeLayout)findViewById(R.id.rr);
                  rr.setOnTouchListener(this);
         };
         public  boolean onTouch(View view,MotionEvent motionEvent){
                  int x=(int)motionEvent.getX(),y=(int)motionEvent.getY();
                  String ss="";
                  if(motionEvent.getAction()==MotionEvent.ACTION_DOWN){
                           ss="按下:("+x+" , "+y+")";
                           res.setText(ss);
                           setTitle(ss);
                  };
                  if(motionEvent.getAction()==MotionEvent.ACTION_MOVE){
                           ss="移動:("+x+" , "+y+")";
                           res.setText(ss);
                           setTitle(ss);
                  };
                  if(motionEvent.getAction()==MotionEvent.ACTION_UP){
                           ss="放開:("+x+" , "+y+")";
                           res.setText(ss);
                           setTitle(ss);
                  };
                  return true;
         };

};