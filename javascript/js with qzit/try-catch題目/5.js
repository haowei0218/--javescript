/**在存取未定義物件的屬性時 使用try-catch區塊擷取並處理typeError */
try {
  const UndefinedObject = undefined;
  console.log(UndefinedObject.property);
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Error:Property access to undefined object");
  } else {
    console.log(error.message);
  }
}
