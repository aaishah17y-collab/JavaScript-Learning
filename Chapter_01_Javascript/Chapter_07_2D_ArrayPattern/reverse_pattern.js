let n= 5;
for(let i =n;i>=1;i--) // For (Let i=1;i<=n;i++)
    {
    let row ="";
    for(let j=1; j<=i; j++){
        row += "*";
    }
    console.log(row.trim());
}
