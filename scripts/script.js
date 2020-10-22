var bonusNin = bonusTai = bonusGen = bonusInt = bonusForca = bonusVel = bonusSta = 0;
var nerfVel = nerfSta = nerfInt = nerfForca = 0;
var primeiraHabilidade = '--';
var limiteNin = 0 ;

function guardarInfo() {
nomePersonagem = $('#nome').val();
sobrenome = $('#sobrenome').val();
vila = $('input[name=vila]:checked', '#dados-basicos-ninja').val();
genero = $('#genero').val();
sex = $('#sexualidade').val();
arquetipo = $('#arquetipo-dropdown').val();
cla = $('input[name=cla]:checked', '#dados-basicos-ninja').val();
kg = $('input[name=kg]:checked', '#dados-basicos-ninja').val();
idade = $('#idade').val();
aniversario = $('#aniversario-dropdown').val();
gostos = $('#gostos').val();
repulsas = $('#repulsas').val();
motivacoes = $('#motivacoes').val();
transtornos = $('#transtornos').val();
medos = $('#medos').val();
descpsicologica = $('#descpsicologica').val();
altura = $('#altura').val();
peso = $('#peso').val();
cabelos = $('#cabelos').val();
olhos = $('#olhos').val();
braco = $('#braco').val();
outros = $('#outros').val();
ppbase = $('#ppbase').val();
ppserie = $('#ppserie').val();
descfisica = $('#descfisica').val();
titulo = $('#titulo').val();
$("#historia").html($("#historia").val());
historia = $("#historia").html();
nin = $('#ninjutsu').val();
gen = $('#genjutsu').val();
tai = $('#taijutsu').val();
int = $('#int').val();
forca = $('#forca').val();
vel = $('#vel').val();
sta = $('#sta').val();
selos = $('#selos').val();

primeiraNatureza = $('#primeira-natureza :selected').val();
segundaNatureza = $('#segunda-natureza :selected').val();
terceiraNatureza = $('#terceira-natureza :selected').val();
kgElemental = $('#kg-elemental').val();
afinidadeElemental = $('#afinidade-elemental').val();

if (kgElemental == 'Kōton') {
    afinidadeElemental += ' e Kōton'
}

limiteJutsus = $('#limite-jutsus').val();


bolsaDeArmas = armasEscolhidas.join('\n');


totalPontos = parseInt(nin) + parseInt(gen) + parseInt(tai) + parseInt(int) + parseInt(forca) + parseInt(vel) + parseInt(sta) + parseInt(selos);

if(bonusNin == 1) {
    bonusNin = '+1';
} else {
    bonusNin = '';
}

if(bonusTai == 1) {
    bonusTai = '+1';
} else {
    bonusTai = '';
}

if(bonusGen == 1) {
    bonusGen = '+1';
} else {
    bonusGen = '';
}

if(bonusInt == 1) {
    bonusInt = '+1';
} else {
    bonusInt = '';
}

if(bonusForca == 1) {
    bonusForca = '+1';
} else {
    bonusForca = '';
}

if(bonusVel == 1) {
    bonusVel = '+1';
} else {
    bonusVel = '';
}

if(bonusSta == 1) {
    bonusSta = '+1';
} else {
    bonusSta = '';
}



if(nerfInt == 1) {
    nerfInt = '-1';
} else {
    nerfInt = '';
}

if(nerfForca == 1) {
    nerfForca = '-1';
} else {
    nerfForca = '';
}

if(nerfVel == 1) {
    nerfVel = '-1';
} else {
    nerfVel = '';
}

if(nerfSta == 1) {
    nerfSta = '-1';
} else {
    nerfSta = '';
}


salvar()

console.log("Dados guardados!")
}


function salvar() {
    qualidadesSelecionadas = "";
    defeitosSelecionados = "";
    qualidades = document.getElementsByClassName("qualidade-escolhida");
    defeitos = document.getElementsByClassName("defeito-escolhido");
    
    for (i = 0; i < qualidades.length -1; i++) {
        qualidadesSelecionadas += `&ltb&gt+&lt/b&gt${(qualidades[i].innerHTML)} \n`;
    }
        qualidadesSelecionadas += `&ltb&gt+&lt/b&gt${(qualidades[qualidades.length -1].innerHTML)}`;
    
    for (i = 0; i < defeitos.length -1; i++) {
        defeitosSelecionados += `&ltb&gt-&lt/b&gt${(defeitos[i].innerHTML)} \n`;
    }
        defeitosSelecionados += `&ltb&gt-&lt/b&gt${(defeitos[defeitos.length -1].innerHTML)}`;

    document.getElementById("codigo-ficha").innerHTML =
`&ltcenter&gt&ltdiv class="fichadepersonagem"&gt&ltdiv class="imagemdaficha" style="background-image: url(http://placehold.it/630x300)"&gt&lt/div&gt
&ltdiv class="dadosdopersonagem"&gt&ltdiv class="iconedaficha" style="background-image: url(http://placehold.it/100x100)"&gt&lt/div&gt&ltdiv3&gt&lt/div3&gt
    
&ltnome&gt${nomePersonagem}&lt/nome&gt
&ltsobrenome&gt${sobrenome}&lt/sobrenome&gt
&lttipodetopico&gt${vila}&lt/tipodetopico&gt
&ltbr&gt
&lttable&gt&lttr&gt&lttd&gt&ltdiv id="celC" class="c1" title="Dados Básicos"&gt&lti class="fas fa-id-card"&gt&lt/i&gt&lt/div&gt&lt/td&gt
&lttd&gt&ltdiv id="celC" class="c2" title="História"&gt&lti class="fas fa-book"&gt&lt/i&gt&lt/div&gt&lt/td&gt
&lttd&gt&ltdiv id="celC" class="c3" title="Databook"&gt&lti class="fas fa-list"&gt&lt/i&gt&lt/div&gt&lt/td&gt
&lttd&gt&ltdiv id="celC" class="c4" title="Outros dados"&gt&lti class="fas fa-user-clock"&gt&lt/i&gt&lt/div&gt&lt/td&gt&lt/tr&gt&lt/table&gt&lt/div&gt
    
&ltdiv class="dadosdopersonagemheight"&gt&ltdiv class="dados1"&gt&ltdiv class="dadosdopersonagem2"&gt&ltdiv1&gtDados básicos&lt/div1&gt
&ltdiv title="Alcunha"&gt&lti class="fas fa-user-tag"&gt&lt/i&gt Alcunha&lt/div&gt
&ltdiv title="Fama Positiva & Negativa"&gt&lti class="fas fa-users"&gt&lt/i&gt 00 / 00&lt/div&gt
&ltdiv title="Gênero"&gt&lti class="fas fa-venus-mars"&gt&lt/i&gt ${genero}&lt/div&gt
&ltdiv title="Sexualidade"&gt&lti class="fas fa-heart"&gt&lt/i&gt ${sex}&lt/div&gt
&ltdiv title="Arquetipo"&gt&lti class="fas fa-child"&gt&lt/i&gt ${arquetipo}&lt/div&gt
&ltdiv title="Clã"&gt&lti class="fas fa-home"&gt&lt/i&gt ${cla}&lt/div&gt
&ltdiv title="Kekkei Genkai"&gt&lti class="fas fa-dna"&gt&lt/i&gt ${kg}&lt/div&gt
&ltdiv title="Graduação"&gt&lti class="fas fa-user-graduate"&gt&lt/i&gt Genin&lt/div&gt
&ltdiv title="Idade"&gt&lti class="fas fa-baby"&gt&lt/i&gt ${idade}&lt/div&gt
&ltdiv title="Aniversário"&gt&lti class="fas fa-calendar-alt"&gt&lt/i&gt ${aniversario}&lt/div&gt
&ltdiv title="Estado"&gt&lti class="fas fa-smile"&gt&lt/i&gt Vivo&lt/div&gt
&ltdiv title="Profissão"&gt&lti class="fas fa-user-md"&gt&lt/i&gt Nenhuma&lt/div&gt
&ltdiv title="Bijuu"&gt&lti class="fas fa-paw"&gt&lt/i&gt Nenhuma&lt/div&gt&lt/div&gt
    
&ltdiv class="dadosdopersonagem3"&gt&ltb&gtDescrição psicológica&lt/b&gt
[b]Coisas que gosta:[/b] ${gostos}
[b]Coisas que não gosta:[/b] ${repulsas}
[b]Motivações:[/b] ${motivacoes}
[b]Medos:[/b] ${medos}
[b]Transtornos/Defeitos:[/b] ${transtornos}
[b]Descrição Geral:[/b] ${descpsicologica}
    
&ltb&gtDescrição física&lt/b&gt
[b]Altura:[/b] ${altura}
[b]Peso:[/b] ${peso}
[b]Cabelos:[/b] ${cabelos}
[b]Olhos:[/b] ${olhos}
[b]Braço dominante:[/b] ${braco}
[b]Outros:[/b] ${outros}
[b]Personagem Base:[/b] ${ppbase}
[b]Descrição Geral:[/b] ${descfisica}&lt/div&gt&lt/div&gt
    
&ltdiv class="dados2"&gt&ltdiv class="titdaficha"&gt${titulo}&lt/div&gt
&ltdiv class="histdopersonagem" style="margin: 0px -15px;"&gt${historia}&lt/div&gt&lt/div&gt
    
&ltdiv class="dados3"&gt&ltdiv class="dadosdopersonagem2"&gt&ltdiv1&gtDatabook&lt/div1&gt
&ltdiv title="Ninjutsu"&gt&lti class="fas fa-user-ninja"&gt&lt/i&gt &ltc&gt[0${nin + bonusNin}]&lt/c&gt Ninjutsu&lt/div&gt
&ltdiv title="Genjutsu"&gt&lti class="fas fa-user-ninja"&gt&lt/i&gt &ltc&gt[0${gen + bonusGen}]&lt/c&gt Genjutsu&lt/div&gt
&ltdiv title="Taijutsu"&gt&lti class="fas fa-user-ninja"&gt&lt/i&gt &ltc&gt[0${tai + bonusTai}]&lt/c&gt Taijutsu&lt/div&gt
&ltdiv title="Inteligência"&gt&lti class="fas fa-user-ninja"&gt&lt/i&gt&ltc&gt[0${int + bonusInt + nerfInt}]&lt/c&gt Inteligência&lt/div&gt
&ltdiv title="Força"&gt&lti class="fas fa-user-ninja"&gt&lt/i&gt &ltc&gt[0${forca + bonusForca + nerfForca}]&lt/c&gt Força&lt/div&gt
&ltdiv title="Velocidade"&gt&lti class="fas fa-user-ninja"&gt&lt/i&gt &ltc&gt[0${vel + bonusVel + nerfVel}]&lt/c&gt Velocidade&lt/div&gt
&ltdiv title="Stamina"&gt&lti class="fas fa-user-ninja"&gt&lt/i&gt &ltc&gt[0${sta + bonusSta + nerfSta}]&lt/c&gt Stamina&lt/div&gt
&ltdiv title="Selos"&gt&lti class="fas fa-user-ninja"&gt&lt/i&gt &ltc&gt[0${selos}]&lt/c&gt Selos&lt/div&gt
    
&ltdiv title="Regeneração"&gt&lti class="fas fa-user-ninja"&gt&lt/i&gt &ltc&gt[00]&lt/c&gt Regeneração&lt/div&gt
&ltdiv title="Recuperação"&gt&lti class="fas fa-user-ninja"&gt&lt/i&gt &ltc&gt[00]&lt/c&gt Recuperação&lt/div&gt
&ltdiv title="Sensoriamento"&gt&lti class="fas fa-user-ninja"&gt&lt/i&gt &ltc&gt[00]&lt/c&gt Sensoriamento&lt/div&gt
&ltdiv title="Shurikenjutsu"&gt&lti class="fas fa-user-ninja"&gt&lt/i&gt &ltc&gt[00]&lt/c&gt Shurikenjutsu&lt/div&gt
&ltdiv title="Cura"&gt&lti class="fas fa-user-ninja"&gt&lt/i&gt &ltc&gt[00]&lt/c&gt Cura&lt/div&gt
&ltdiv title="Abosorção"&gt&lti class="fas fa-user-ninja"&gt&lt/i&gt &ltc&gt[00]&lt/c&gt Absorção&lt/div&gt
&ltdiv title="Ninshu"&gt&lti class="fas fa-user-ninja"&gt&lt/i&gt &ltc&gt[00]&lt/c&gt Ninshu&lt/div&gt
&ltdiv title="Combate"&gt&lti class="fas fa-user-ninja"&gt&lt/i&gt &ltc&gt[00]&lt/c&gt Combate&lt/div&gt
&ltdiv title="Ilusão"&gt&lti class="fas fa-user-ninja"&gt&lt/i&gt &ltc&gt[00]&lt/c&gtIlusão&lt/div&gt
    
&ltdiv title="Total"&gt&lti class="fas fa-user-ninja"&gt&lt/i&gt &ltc&gt[0${totalPontos + quantBonus}]&lt/c&gtTotal&lt/div&gt
&ltdiv title="Extras"&gt&lti class="fas fa-user-ninja"&gt&lt/i&gt &ltc&gt[0${quantBonus}]&lt/c&gt Extras&lt/div&gt
&ltdiv title="Adquiridos"&gt&lti class="fas fa-user-ninja"&gt&lt/i&gt &ltc&gt[00]&lt/c&gt Adquiridos&lt/div&gt
&lt/div&gt
    
&ltdiv class="dadosdopersonagem3-2"&gt&ltb&gtQualidades e Defeitos&lt/b&gt
    
&lttable&gt&lttr&gt&lttd&gt&ltdiv class="qualidades"&gt${qualidadesSelecionadas}
&lttd&gt&ltdiv class="defeitos"&gt${defeitosSelecionados}&lt/div&gt&lt/td&gt&lt/tr&gt&lt/table&gt
    
&ltb&gtNaturezas e Particularidades&lt/b&gt
[b]Primeira Natureza:[/b] ${primeiraNatureza}
[b]Segunda Natureza:[/b] ${segundaNatureza}
[b]Terceira Natureza:[/b] ${terceiraNatureza}
[b]Kekkei Genkai Elemental:[/b] ${kgElemental}
[b]Afinidade Elemental:[/b] ${afinidadeElemental}
    
[b]Primeira Habilidade:[/b] ${primeiraHabilidade}
[b]Segunda Habilidade:[/b] --.
[b]Primeira Especialidade:[/b] --.
[b]Segunda Especialidade:[/b] --.
[b]Transplantes:[/b] --.
[b]Habilidade Única:[/b] --.
[b]Pacto de Sangue:[/b] --.
[b]Limite de Jutsus:[/b] ${limiteJutsus}
    
&ltb&gtBolsa de Armas (20)&lt/b&gt
${bolsaDeArmas}
&lt/div&gt&lt/div&gt
    
&ltdiv class="dados4"&gt&ltdiv class="outrosdopersonagem"&gt&ltb&gtRelacionamentos&lt/b&gt
[spoiler=Relacionamentos]
[/spoiler]
    
&ltb&gtMissões Realizadas&lt/b&gt
&ltmissoes&gt&ltb&gt+&lt/b&gt [00] Rank D
&ltb&gt+&lt/b&gt [00] Rank C
&ltb&gt+&lt/b&gt [00] Rank B
&ltb&gt+&lt/b&gt [00] Rank A
&ltb&gt+&lt/b&gt [00] Rank S&lt/missoes&gt
    
&ltb&gtLinks comprovatórios&lt/b&gt
&ltquadro&gtTodos os acontecimentos do personagem.&lt/quadro&gt&lt/div&gt&lt/div&gt&lt/div&gt
    
&ltdiv class="finaldaficha"&gtEste personagem tem a aparência de &ltb&gt${ppbase}&lt/b&gt da série &ltb&gt${ppserie}&lt/b&gt
&ltb&gtPlayer Off:&lt/b&gt  / &ltb&gtContatos:&lt/b&gt &lt/div&gt&lt/div&gt&lt/center&gt`
}

new ClipboardJS('#codigo-ficha');

$('#codigo-ficha').on('click', function() {
    $('#codigo-ficha').addClass('copiado');
    alert('Código copiado!');
})