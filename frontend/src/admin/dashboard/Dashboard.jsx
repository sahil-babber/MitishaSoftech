import Chart1 from './chart1/Chart1'
import Chart2 from './chart2/Chart2'

function Dashboard() {
  return (
    <>
    <div className="container-fluid ">
      <div className="row justify-content-evenly">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="h2 syne">Permormance Chart</div>

          <div className="mt-3 mb-3">
            <Chart1/>
          </div>
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="h2 syne">Storage Chart</div>

          <div className="mt-5 mb-2">
            <Chart2/>
          </div>
        </div>

      </div>
    </div>
    
    </>
  )
}

export default Dashboard