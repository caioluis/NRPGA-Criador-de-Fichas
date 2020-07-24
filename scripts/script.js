var bonusNin = bonusTai = bonusGen = bonusInt = bonusForca = bonusVel = bonusSta = 0;
function guardarInfo() {
nomePersonagem = $('#nome').val();
sobrenome = $('#sobrenome').val();
vila = $('#vilarejo').val();
genero = $('#genero').val();
sex = $('#sexualidade').val();
arquetipo = $('#arquetipo-dropdown').val();
cla = $('#cla-dropdown').val();
kg = $('#kg-dropdown').val();
idade = $('#idade').val();
aniversario = $('#aniversario-dropdown').val();
gostos = $('#gostos').val();
repulsas = $('#repulsas').val();
motivacoes = $('#motivacoes').val();
medos = $('#medos').val();
transtornos = $('#transtornos').val();
descpsicologica = $('#descpsicologica').val();
altura = $('#altura').val();
peso = $('#peso').val();
cabelos = $('#cabelos').val();
olhos = $('#olhos').val();
braco = $('#braco').val();
outros = $('#outros').val();
ppbase = $('#ppbase').val();
descfisica = $('#descfisica').val();
titulo = $('#titulo').val();
ano = $('#ano').val();
historia = $('#historia').val();
nin = $('#ninjutsu').val();
gen = $('#genjutsu').val();
tai = $('#taijutsu').val();
int = $('#int').val();
forca = $('#forca').val();
vel = $('#vel').val();
sta = $('#sta').val();
selos = $('#selos').val();


primeiraNatureza = $('#primeira-natureza').val();

segundaNatureza = $('#segunda-natureza').val();

kgElemental = $('#kg-elemental').val();

afinidadeElemental = $('#afinidade-elemental').val();

limiteJutsus = $('#limite-jutsus').val();

bolsaArmas = document.getElementById('bolsa-de-armas').value.split('\n');
bolsaDeArmas = "";
for (i = 0; i < bolsaArmas.length; i++) {
    bolsaDeArmas += `${(bolsaArmas[i])} \n`;
}
    


totalPontos = parseInt(nin) + parseInt(gen) + parseInt(tai) + parseInt(int) + parseInt(forca) + parseInt(vel) + parseInt(sta) + parseInt(selos);


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

    document.getElementById("form-ficha").style.display = "none";
    document.getElementById("fim").style.display = "block";
    document.getElementById("codigo-ficha").innerHTML =
`&ltcenter&gt&ltdiv class="fichadepersonagem"&gt&ltdiv class="imagemdaficha" style="background-image: url(http://placehold.it/630x300)"&gt&lt/div&gt
&ltdiv class="dadosdopersonagem"&gt&ltdiv class="iconedaficha" style="background-image: url(http://placehold.it/100x100)"&gt&lt/div&gt&ltdiv3&gt&lt/div3&gt
    
&ltnome&gt${nomePersonagem}&lt/nome&gt
&ltsobrenome&gt${sobrenome}&lt/sobrenome&gt
&lttipodetopico&gt${vila}&lt/tipodetopico&gt
    
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
&ltdiv title="Profissão"&gt&lti class="fas fa-user-md"&gt&lt/i&gt Profissão&lt/div&gt
&ltdiv title="Bijuu"&gt&lti class="fas fa-paw"&gt&lt/i&gt Bijuu&lt/div&gt&lt/div&gt
    
&ltdiv class="dadosdopersonagem3"&gt&ltb&gtDescrição psicológica&lt/b&gt
[b]Coisas que gosta:[/b] ${gostos}
[b]Coisas que não gosta:[/b] ${repulsas}
[b]Motivações:[/b] ${motivacoes}
[b]Medos:[/b] ${medos}
[b]Transtornos/Defeitos:[/b] ${defeitos}
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
&ltdiv class="histdopersonagem" style="margin: 0px -15px;"&gt&ltb&gt${ano}&lt/b&gt
${historia}&lt/div&gt&lt/div&gt
    
&ltdiv class="dados3"&gt&ltdiv class="dadosdopersonagem2"&gt&ltdiv1&gtDatabook&lt/div1&gt
&ltdiv title="Ninjutsu"&gt&lti class="fas fa-user-ninja"&gt&lt/i&gt &ltc&gt[0${nin}]&lt/c&gt Ninjutsu&lt/div&gt
&ltdiv title="Genjutsu"&gt&lti class="fas fa-user-ninja"&gt&lt/i&gt &ltc&gt[0${gen}]&lt/c&gt Genjutsu&lt/div&gt
&ltdiv title="Taijutsu"&gt&lti class="fas fa-user-ninja"&gt&lt/i&gt &ltc&gt[0${tai}]&lt/c&gt Taijutsu&lt/div&gt
&ltdiv title="Inteligência"&gt&lti class="fas fa-user-ninja"&gt&lt/i&gt&ltc&gt[0${int}]&lt/c&gt Inteligência&lt/div&gt
&ltdiv title="Força"&gt&lti class="fas fa-user-ninja"&gt&lt/i&gt &ltc&gt[0${forca}]&lt/c&gt Força&lt/div&gt
&ltdiv title="Velocidade"&gt&lti class="fas fa-user-ninja"&gt&lt/i&gt &ltc&gt[0${vel}]&lt/c&gt Velocidade&lt/div&gt
&ltdiv title="Stamina"&gt&lti class="fas fa-user-ninja"&gt&lt/i&gt &ltc&gt[0${sta}]&lt/c&gt Stamina&lt/div&gt
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
    
&ltdiv title="Total"&gt&lti class="fas fa-user-ninja"&gt&lt/i&gt &ltc&gt[0${totalPontos}]&lt/c&gtTotal&lt/div&gt
&ltdiv title="Extras"&gt&lti class="fas fa-user-ninja"&gt&lt/i&gt &ltc&gt[00]&lt/c&gt Extras&lt/div&gt
&ltdiv title="Adquiridos"&gt&lti class="fas fa-user-ninja"&gt&lt/i&gt &ltc&gt[00]&lt/c&gt Adquiridos&lt/div&gt
&lt/div&gt
    
&ltdiv class="dadosdopersonagem3-2"&gt&ltb&gtQualidades e Defeitos&lt/b&gt
    
&lttable&gt&lttr&gt&lttd&gt&ltdiv class="qualidades"&gt${qualidadesSelecionadas}
&lttd&gt&ltdiv class="defeitos"&gt${defeitosSelecionados}&lt/div&gt&lt/td&gt&lt/tr&gt&lt/table&gt
    
&ltb&gtNaturezas e Particularidades&lt/b&gt
[b]Primeira Natureza:[/b] ${primeiraNatureza}
[b]Segunda Natureza:[/b] ${segundaNatureza}
[b]Terceira Natureza:[/b] --.
[b]Kekkei Genkai Elemental:[/b] ${kgElemental}
[b]Afinidade Elemental:[/b] ${afinidadeElemental}
    
[b]Primeira Habilidade:[/b] --.
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
    
&ltdiv class="finaldaficha"&gtEste personagem tem a aparência de &ltb&gt???&lt/b&gt da série &ltb&gt???&lt/b&gt
&ltb&gtPlayer Off:&lt/b&gt  / &ltb&gtContatos:&lt/b&gt &lt/div&gt&lt/div&gt&lt/center&gt
    
&ltstyle&gt.dadosdopersonagem {background-color: #989898!important} .dadosdopersonagem2 i, #celC, .finaldaficha b, .dadosdopersonagem2 div1, .histdopersonagem b, .outrosdopersonagem b, .dadosdopersonagem3 b, .dadosdopersonagem3-2 b, .outrosdopersonagem missoes b  {color: #989898!important;} dl.codebox {border-left: 0px solid black; padding: 15px;}&lt/style>`

}

