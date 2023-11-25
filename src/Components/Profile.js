// components/Profile.js
import React from 'react';
import styled from 'styled-components';

function Profile() {
  return (
    <ProfileStyled>
      <img src="/Developer.jpg" alt="Profile" />
      <h2>Desy Monica Zaharani</h2>
      <p>NIM : 21120121120014</p>
      {}
    </ProfileStyled>
  );
}

const ProfileStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover; /* agar gambar tidak terdistorsi */
    border: 5px solid #fff; /* tambahkan border agar gambar terlihat lebih baik */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* tambahkan efek bayangan */
  }

  h2 {
    margin: 2rem 0 0.5rem;
    font-size: 1.5rem;
    color: #333; /* warna judul */
  }

  p {
    margin-bottom: 1rem;
    color: #666; /* warna teks tambahan */
  }
`;



export default Profile;
