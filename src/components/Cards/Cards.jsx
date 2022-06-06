import React from 'react';
import styles from './Cards.module.scss';
import classNames from "classnames";

export const Cards = ({ cardsData }) => (
    <>
      {cardsData.map(card => (
        <div
          className={classNames(
            'col-4 mb-4 position-relative',
          )}
          key={card.id}
        >
          <div className={styles.cards}>
            <img
              className={`${styles.img} img-fluid`}
              src={card.image}
              alt="Card image"
            />
            <div className={styles.content}>
              <div className="fs-4 fw-bold mb-4">
                  {card.name}
              </div>
              <div className="fs-6">
                  Last Location:
              </div>
              <div className="fs-5">
                  {card.location.name}
              </div>
            </div>
          </div>

          <div
            className={classNames(
              'badge',
                styles.badge,
              {'bg-danger': card.status === 'Dead'},
              {'bg-success': card.status === 'Alive'},
              {'bg-secondary': card.status === 'unknown'},
            )}
          >
            {card.status}
          </div>
        </div>
      ))}
    </>
);
