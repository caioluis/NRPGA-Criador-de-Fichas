var ctx = document.getElementById('myChart');
var myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['Ninjutsu', 'Taijutsu', 'Genjutsu', 'Inteligência', 'Força', 'Velocidade', 'Stamina', 'Selos'],
        datasets: [
            {
                color: 'white',
                label: 'Databook',
                backgroundColor: 'rgba(255,000,000,0.3)',
                borderColor: 'red',
                borderWidth: 1,
                data: [0, 0, 0, 0, 0, 0, 0, 0],
                pointRadius: 0
            }
        ]
    },
    options: {
        legend: {
            display: false
        },
        scale: {
            pointLabels: {
                fontColor: 'white',
                fontSize: 14
            },
            gridLines: {
                color:'white'
            },
            angleLines: {
                display: true,
                lineWidth: 3,
                color: 'rgba(255,255,255,0.1)'
            },
            ticks: {
                backdropColor: 'rgba(000,000,00,0)',
                fontColor: 'white',
                min: 0,
                max: 5,
                stepSize: 1
            }
            
        }
    }
});

$('.atributo').on('change', function() {
    nin = parseInt($('#ninjutsu').val()) + bonusNin;
    tai = parseInt($('#taijutsu').val()) + bonusTai;
    gen = parseInt($('#genjutsu').val()) + bonusGen;
    int = parseInt($('#int').val()) + bonusInt;
    forca = parseInt($('#forca').val()) + bonusForca;
    vel = parseInt($('#vel').val()) + bonusVel;
    sta = parseInt($('#sta').val()) + bonusSta;
    selos = parseInt($('#selos').val());

    myRadarChart.data.datasets[0].data.splice(0, 8, nin, tai, gen, int, forca, vel, sta, selos);
    myRadarChart.update();
});