function addBook() {
            const title = document.getElementById('title').value;
            const author = document.getElementById('author').value;
            const isbn = document.getElementById('isbn').value;
            
            if (title === '' || author === '' || isbn === '') {
                alert('Please fill in all fields');
                return;
            }
            
            const list = document.getElementById('book-list');
            const row = document.createElement('tr');
            
            row.innerHTML = `
                <td>${title}</td>
                <td>${author}</td>
                <td>${isbn}</td>
                <td><button class="delete" onclick="removeBook(this)">Clear</button></td>
            `;
            
            list.appendChild(row);
            
            document.getElementById('title').value = '';
            document.getElementById('author').value = '';
            document.getElementById('isbn').value = '';
        }
        
        function removeBook(btn) {
            btn.parentElement.parentElement.remove();
        }