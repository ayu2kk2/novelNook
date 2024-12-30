
function Cards({data}) {

  return (
    <>
      <div className="flex p-3 justify-center mt-6 my-3">
      <div className="card bg-base-100 md:w-96 shadow-xl hover:scale-105 duration-200 dark:bg-gray-200 dark:text-black">
  <figure>
    <img
      src={data.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {data.name}
      <div className="badge badge-secondary bg-yellow-500 border-yellow-400 dark:bg-yellow-400 dark:border-yellow-400 ">{data.category}</div>
    </h2>
    <p>{data.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline px-3 py-3">${data.price}</div>
      <div className="badge badge-outline cursor-pointer hover:bg-yellow-400 hover:border-yellow-400 px-2 py-3 hover:text-gray-900 duration-200">Buy now</div>
    </div>
  </div>
</div>
      </div>
    </>
  )
}

export default Cards
