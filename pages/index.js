export default function Home() {
  return (
    <div>
      <label>From</label>
      <input type="text" placeholder="Wallet address"/>
      <br/>
      <label>Sum</label>
      <input type="number" placeholder="Amount"/>
      <br/>
      <label>To</label>
      <input type="text" placeholder="Wallet address"/>
      <button onClick={() => {
        
      }}>Submit</button>
    </div>
  );
}
