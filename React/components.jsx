/**
 * 第一個參數放的是jsx內容 一個html標籤
 * 第二個參數是要放到html標籤的哪個位置 要放到#id ＝ root的位置
 */
ReactDom.render(
         <h1>Hello worlkd</h1>,
         document.getElementById('root')
)
const word = 'React';
ReactDom.render(<h1>Hello ,{wrod}</h1>,document.getElementById('root1'));

const deviceName = 'Galaxy Note';
const currentPrice = 41000;
const salePrice = (currentPrice,discount) => currentPrice * discount;
ReactDom.render(
         <h1>
                  現在{deviceName} 的售價是 ${currentPrice}, 特價 ${salePrice(currentPrice,0.7)}
         </h1>,
         document.getElementById('root2')
)

/**簡單的計數器 */

/**定義style屬性 */
const someStyle = {
         backgroundColor:white,
         fontSize:'20px',
         border:'1px solid gray',
         padding:'10px'
}
const Counter = ()=>{
         const count = 254;
         return(
                  <div className="container" style={someStyle}>
                  <div className="chevron chevron-up" style={{color:'gray',textShadow:'2px 2px #434a54'}}></div>
                  <div className="number">{count}</div>
                  <div chevron chevron-down onClick={()=>{count += 1; console.log(`current Count is ${count}`)}}></div>
         </div>
         )
}
        

ReactDom.render(
         Counter,document.getElementById('root3')
)

/**重複的使用計數器 */
ReactDom.render(
         <div style={someStyle}>
                  <Counter />
                  <Counter />
                  <Counter />
         </div>,
         document.getElementById('root4')
)


/**React元件中的資料狀態 - useState的使用 */
/**
 * 狀態：會連動導致畫面改變的資料（data）習慣上被稱作狀態(state)
 * 開頭為use代表是一個Hook
 * 呼叫useState()方法 會回傳一個陣列
 */
React.useState(); //也是一種取出物件的方法
const {useState} = React; //從react物件取出useState方法
/**在點擊箭頭往上時 setCount() count+1 */
/**在點擊箭頭往下時 setCount() count-1 */
const Counter1 = () =>{
         const [count,setCount] = useState(256);
         return(
                  <div className="container" style={someStyle}>
                  <div className="chevron chevron-up" style={{color:'gray',textShadow:'2px 2px #434a54'}} onClick={()=> setCount(count + 1)}></div>
                  <div className="number">{count}</div>
                  <div chevron chevron-down onClick={()=>{setCount(count - 1); console.log(`current Count is ${count}`)}}></div>
         </div>
         )
}

/**useState()得到的變數和方法名稱可以自己定義 慣例上用來改變變數的方法以"set"開頭 */
const arrayReturnFromUseState = useState('<資料預設值>');
const count = arrayReturnFromUseState[0]; //想要監控的資料
const setCount1 = arrayReturnFromUseState[1];//修改該資料的方法
const [count1,setCount] = useState('<資料預設值>');
const [price,setPrice] = useState(1000);
const [description,setdescription] = useState('this is description');