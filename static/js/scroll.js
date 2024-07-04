  function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
    function openTheDoor() {
        let tip = `
            <div id="dialog-overlay" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5); display: flex; align-items: center; justify-content: center;">
                <div style="width: 80%; max-width: 300px; height: 200px; background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); display: flex; flex-direction: column; justify-content: space-between;">
                    <p style="text-align: center; margin-bottom: 20px;font-weight:bold">请确认是否已满18岁，未成年禁止进入</p>
                    <div style="display: flex; justify-content: space-between;">
                        <button id="yesButton" style="background: #4CAF50; color: white; border: none; padding: 10px 20px; border-radius: 5px;">是</button>
                        <button id="noButton" style="background: #f44336; color: white; border: none; padding: 10px 20px; border-radius: 5px;">否</button>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', tip);
        
        document.getElementById('yesButton').addEventListener('click', function() {
            window.location.href = "http://yiyun223.ysepan.com"; 
        });
        
        document.getElementById('noButton').addEventListener('click', function() {
            document.getElementById('dialog-overlay').remove();
        });
    }
