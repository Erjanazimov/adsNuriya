import React from 'react';

const ServiceCost = () => {
  return (
      <div className="container" style={{marginBottom: "3rem"}}>
        <div style={styles.header}>
          <h1 style={styles.title}>Стоимость услуги</h1>
          <p style={styles.description}>
            Таргетированная реклама — это не расход, а инвестиция в рост бизнеса.
          </p>
        </div>

        <div style={styles.detailsBox}>
          <h2 style={styles.subtitle}>Что влияет на стоимость?</h2>
          <ul style={styles.list}>
            <li>🎯 Сложность ниши и уровень конкуренции</li>
            <li>📊 Объём работы и количество рекламных кампаний</li>
            <li>💼 Формат сотрудничества (настройка рекламы или полное ведение)</li>
          </ul>
        </div>

        <div style={styles.priceBox}>
          <p style={styles.priceDetails}>Средний чек за услугу – 30 000 KGS</p>
          <p style={styles.priceDetails}>Консультация – 10 000 KGS</p>
          <p style={styles.priceDetails}>Разблокировка аккаунтов – от 3000 KGS</p>
        </div>

        <div style={styles.contactBox}>
          <p style={styles.contactText}>Напиши мне, и я помогу выбрать оптимальный вариант под твои задачи! 🚀</p>
        </div>
        <div style={{display: "flex", justifyContent: "center"}}>
          <a href="https://wa.me/996776807961" target="_blank">
            <div className="btns">
              Записаться на консультацию
            </div>
          </a>
        </div>
      </div>
);
};

const styles = {
  header: {
    textAlign: 'center',
    marginBottom: '50px',
    background: 'linear-gradient(135deg, #1a73e8, #00bcd4)',
    padding: '30px',
    borderRadius: '20px',
    color: '#fff',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
    position: 'relative',
    zIndex: 1,
  },
  title: {
    fontSize: '30px',
    fontWeight: '800',
    letterSpacing: '2px',
    marginBottom: '15px',
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
  },
  description: {
    fontSize: '18px',
    fontWeight: '300',
    lineHeight: '1.7',
    fontStyle: 'italic',
    opacity: 0.8,
  },
  detailsBox: {
    marginBottom: '40px',
    padding: '25px',
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    position: 'relative',
  },
  subtitle: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#333',
    marginBottom: '20px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    position: 'relative',
    zIndex: 1,
  },
  list: {
    paddingLeft: '20px',
    fontSize: '16px',
    color: '#666',
    lineHeight: '1.7',
    listStyleType: 'none',
    marginBottom: '30px',
  },
  priceBox: {
    marginBottom: '40px',
    padding: '30px',
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    zIndex: 1,
  },
  priceTitle: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#e67e22',
    marginBottom: '15px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    position: 'relative',
    zIndex: 1,
  },
  price: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#333',
    marginBottom: '15px',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    position: 'relative',
    zIndex: 1,
  },
  priceDetails: {
    fontSize: '18px',
    color: '#888',
    marginBottom: '10px',
    position: 'relative',
    zIndex: 1,
  },
  contactBox: {
    textAlign: 'center',
    marginTop: '50px',
    fontSize: '20px',
    fontWeight: '600',
    color: '#fff',
    background: 'linear-gradient(135deg, #00bcd4, #2ecc71)',
    padding: '15px',
    borderRadius: '20px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
    position: 'relative',
    zIndex: 1,
  },
  contactText: {
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontSize: '16px',
    fontWeight: '700',
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
  },
};

export default ServiceCost;
