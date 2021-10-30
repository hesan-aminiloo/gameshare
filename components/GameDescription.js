
const GameDescription = ({ description }) => {
  return (
    <div className="absolute bottom-10 left-5 right-5 p-8 rounded-lg bg-white shadow-lg flex flex-row">
      <div className="flex-1">
        <div
          className="flex-1 rounded bg-no-repeat bg-center bg-cover"
          style={{
            width: 250,
            height: 250,
            backgroundImage: `url(https://media.karousell.com/media/photos/products/2021/9/29/playstation_5_gamesps5_games_d_1632919696_620cf211_progressive.jpg)`
          }}
        />
      </div>
      <div className="flex-auto px-5 pr-10">
        <h1 className="text-xl text-bold mb-2">Final fantasy | فاینال فانتزی</h1>
        <p className="text-sm text-gray-400">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. 
        </p>
      </div>
      <div className="flex-1 flex-end">
        <a
          className="block w-full bg-blue-500 rounded shadow py-2 px-7 text-white text-sm mb-4"
          href="tel:09379025852"
        >
          تماس
        </a>
        <a
          className="block w-full bg-red-500 rounded shadow py-2 px-7 text-white text-sm mb-4"
          href="tel:09379025852"
        >
          اشتراک
        </a>
      </div>
    </div>
  )
};

export default GameDescription;
