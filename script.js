body {
    background: linear-gradient(135deg, #83a4d4, #b6fbff);
    min-height: 100vh;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
}

#main {
    background: rgba(255, 255, 255, 0.95);
    max-width: 600px;
    margin: 20px auto;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

form {
    text-align: center;
    margin: 20px 0;
}

.password-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 20px 0;
}

#password {
    padding: 15px 25px;
    background: #f8f9fa;
    border: 2px solid #dee2e6;
    border-radius: 8px;
    font-size: 1.2rem;
    min-width: 250px;
    word-break: break-all;
}

#copyBtn {
    padding: 12px 20px;
    background: #4CAF50;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
}

#copyBtn:hover {
    background: #45a049;
    transform: translateY(-2px);
}

button#click {
    background: #007bff;
    color: white;
    border: none;
    padding: 15px 30px;
    border-radius: 8px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.3s ease;
}

button#click:hover {
    background: #0069d9;
    transform: translateY(-2px);
}

label {
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 10px 0;
    justify-content: center;
}

input[type="checkbox"] {
    width: 20px;
    height: 20px;
    margin: 0;
}

@media (max-width: 650px) {
    #main {
        margin: 10px;
        padding: 20px;
    }
    
    h1 {
        font-size: 1.8rem;
    }
    
    #password {
        font-size: 1rem;
        min-width: 200px;
    }
}
