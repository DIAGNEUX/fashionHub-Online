import React from 'react'


export const Acceuil = () => {
  return (
    <div className='Wrapper-Accueil'>
      <div className='Accueil'>
      <div className="left">
        <div className='WrapContentLeft'>
          <div className='firstContent'>

          </div>
          <div className='secondContent'>
            <div></div>
            <div></div>

          </div>
          <div className='thirdContent'>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className='WrapTrends'>
            <div className="Trends">
              <div className="carrouselTrend">
                <div>
                <h1> Carrousel Tendances</h1>
                <button>read more</button>
                </div>
              </div>
            </div>
          </div>

          <div className="WrapBoutique">
          <div className="Boutique">
              <div className="carrouselBoutique">
                <div>
                <h1> Carrousel Boutique</h1>
                <button>read more</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className='right'>
        <div className='WrapContentRight'>
          <div className='RecentContent'>
          </div>
          <div className='RecentContent'>
          </div>

        </div>
      </div>
      </div>
    </div>
  )
}
