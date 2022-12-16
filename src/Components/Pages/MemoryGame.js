import { clearPage, renderPageTitle } from "../../utils/render";


let correctFlips = 0;
let lastFlipped = [];
let moves = 0;
let timerObserver;
let started = false;

const cards = {
	box1: 'box2',
	box2: 'box1',
	box3: 'box4',
	box4: 'box3',
	box5: 'box6',
	box6: 'box5',
	box7: 'box8',
	box8: 'box7',
	box9: 'box10',
	box10: 'box9',
	box11: 'box12',
	box12: 'box11',
	box13: 'box14',
	box14: 'box13',
	box15: 'box16',
	box16: 'box15',
	box17: 'box18',
	box18: 'box17'
};

const MemoryPage = () => {
    clearPage();
    renderPageTitle('Memory Game');
    renderMemory();
};

function renderMemory() {
    const main = document.querySelector('main');

    const memoryPage = `
    <div class="carbon">
    <div id="victory">Memory Game</div>
    <div class="panel">
    <div class="panel__one circle">Reset</div>
    <div class="panel__two circle">Small</div>
    <div class="panel__three circle">Big</div>
                </div>
        <!-- end of panel -->
        <div class="container">

            <div class="box box1">
                <div class="box backside">
                    <i class="fab fa-android"></i>
                </div>
            </div>

            <div class="box box2">
                <div class="box backside">
                    <i class="fab fa-android"></i>
                </div>
            </div>

            <div class="box box3">
                <div class="box backside">
                    <i class="fab fa-aws"></i>
                </div>
            </div>

            <div class="box box4">
                <div class="box backside">
                    <i class="fab fa-aws"></i>
                </div>
            </div>

            <div class="box box5">
                <div class="box backside">
                    <i class="fab fa-docker"></i>
                </div>
            </div>

            <div class="box box6">
                <div class="box backside">
                    <i class="fab fa-docker"></i>
                </div>
            </div>

            <div class="box box7">
                <div class="box backside">
                    <i class="fab fa-github"></i>
                </div>
            </div>

            <div class="box box8">
                <div class="box backside">
                    <i class="fab fa-github"></i>
                </div>
            </div>

            <div class="box box9">
                <div class="box backside">
                    <i class="fab fa-java"></i>
                </div>
            </div>

            <div class="box box10">
                <div class="box backside">
                    <i class="fab fa-java"></i>
                </div>
            </div>

            <div class="box box11">
                <div class="box backside">
                    <i class="fab fa-npm"></i>
                </div>
            </div>

            <div class="box box12">
                <div class="box backside">
                    <i class="fab fa-npm"></i>
                </div>
            </div>

            <div class="box box13">
                <div class="box backside">
                    <i class="fab fa-js-square"></i>
                </div>
            </div>

            <div class="box box14">
                <div class="box backside">
                    <i class="fab fa-js-square"></i>
                </div>
            </div>

            <div class="box box15">
                <div class="box backside">
                    <i class="fab fa-python"></i>
                </div>
            </div>

            <div class="box box16">
                <div class="box backside">
                    <i class="fab fa-python"></i>
                </div>
            </div>

            <div class="box box17">
                <div class="box backside">
                    <i class="fab fa-stack-overflow"></i>
                </div>
            </div>

            <div class="box box18">
                <div class="box backside">
                    <i class="fab fa-stack-overflow"></i>
                </div>
            </div>

        </div>
    </div>
    <!-- end of MAIN   -->
    <div class="carbon tabbar">

        <div>
            <h4>
                <span>moves:</span>
                <span class="counter"> 0 </span>
       
            </h4>
            <button class="startMemory" id="startButton">START</button>
        </div>

    </div>    

    `;
    main.innerHTML = memoryPage;
    const startButton = document.getElementById('startButton');
    if (!started){
        startButton.addEventListener('click', startGame);
    }
    const circle1 = document.querySelector('.panel__one');
    const circle2 = document.querySelector('.panel__two');
    const circle3 = document.querySelector('.panel__three');
    
    const carbon = document.querySelector('.carbon');
    const counter = document.querySelector('.counter');

    // red circle
    circle1.addEventListener('click', () => {
        started = false;
        clearInterval(timerObserver);
        renderMemory();
        counter.innerHTML = '0';
    });
    // orange circle
    circle2.addEventListener('click', () => {
        carbon.style.height = '85%';
        carbon.style.width = '65%';
    });
    // green circle
    circle3.addEventListener('click', () => {
        carbon.style.height = '90%';
        carbon.style.width = '90%';
    });
}



function flipOnClick(e) {
    const counter = document.querySelector('.counter');
	moves+=1;
	counter.innerHTML = moves;
	const element = e.target;
	lastFlipped.push(element);
	element.classList.add('flipped');
	// console.log(last_flipped.length);
	compareFlipped(lastFlipped);
}

function compareFlipped(array) {
	if (array.length > 2) {
		array.forEach(el => el.classList.remove('flipped'));
		lastFlipped = [];
	}
	if (array.length === 2) {
		const card1 = array[0].classList[1];
		const card2 = array[1].classList[1];
		// console.log(cards[card1], cards[card2]);
		if (cards[card1] === card2 || cards[card2] === card1) {
			// console.log('Yay its a match');
			const c1 = document.getElementsByClassName(card1)[0];
			c1.firstElementChild.classList.add('matchingcards');
			const c2 = document.getElementsByClassName(card2)[0];
			c2.firstElementChild.classList.add('matchingcards');
			correctFlips += 1;
			lastFlipped = [];
		} else {
			setTimeout(() => {
				array.forEach(el => el.classList.remove('flipped'));
				lastFlipped = [];
			}, 700);
		}
	}
}

function spreadCards(array) {
    const container = document.querySelector('.container');
	const newArr = array.filter(el => array.indexOf(el) % 2 === 0);
	while (newArr.length > 0) {
		const num = Math.floor(Math.random() * newArr.length);
		const pick = newArr[num];
		container.appendChild(pick);
		// console.log(container);
		newArr.splice(num, 1);
	}
}

function startWatching() {
    
    
	timerObserver = setInterval(() => {
		
		if (correctFlips >= 9) {
			clearInterval(timerObserver);
            
			gameWonParty();
		}
		// console.log(minutes, secondsStr);
	}, 1000);
}

function startGame() {
    if(!started){
        started = true;
        const counter = document.querySelector('.counter');
        // const container = document.querySelector('.container');
        const box = Array.from(document.querySelectorAll('.box'));


        box.forEach(el => el.addEventListener('click', flipOnClick));

        correctFlips = 0;
        lastFlipped = [];
        moves = 0;

        
        counter.innerHTML = '0';
        // container.innerHTML = '';
        box.forEach(el => el.classList.remove('flipped'));
        clearInterval(timerObserver);
        spreadCards(box);
        /* container.childNodes.forEach(node =>
            node.firstElementChild.classList.remove('matchingcards')); */
        startWatching();
    }
}

function gameWonParty() {
    const msg = document.getElementById('victory');
    msg.textContent='You Won !';
}


export default MemoryPage;