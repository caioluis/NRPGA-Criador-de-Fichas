var nomePersonagem, sobrenome ,vila, genero, sex, arquetipo, cla, kg, idade, aniversario;

function storeVariables() {
//nome do personagem
nomePersonagem = document.getElementById("nome").value;
localStorage.setItem('nome', nomePersonagem);
//sobrenome
sobrenome = document.getElementById("sobrenome").value;
localStorage.setItem('sobrenome', sobrenome);
// vilarejo
vila = document.getElementById("vilarejo").value;
localStorage.setItem('vila', vila);
//genero
genero = document.getElementById("genero").value;
localStorage.setItem('genero', genero);
//sexualidade
sex = document.getElementById("sexualidade").value;
localStorage.setItem('sex', sex);
//arquetipo
arquetipo = document.getElementById("arquetipo-dropdown").value;
localStorage.setItem('arquetipo', arquetipo);
//cla
cla = document.getElementById("cla").value;
localStorage.setItem('cla', cla);
//KG
kg = document.getElementById("kg").value;
localStorage.setItem('kg', kg);
//idade
idade = document.getElementById("idade").value;
localStorage.setItem('idade', idade);
//aniversario
aniversario = document.getElementById("aniversario-dropdown").value;
localStorage.setItem('aniversario', aniversario);
//gostos
gostos = document.getElementById("gostos").value;
localStorage.setItem('gostos', gostos);
//repulsas
repulsas = document.getElementById("repulsas").value;
localStorage.setItem('repulsas', repulsas);
//motivacoes
motivacoes = document.getElementById("motivacoes").value;
localStorage.setItem('motivacoes', motivacoes);
//medos
medos = document.getElementById("medos").value;
localStorage.setItem('medos', medos);
//defeitos
defeitos = document.getElementById("defeitos").value;
localStorage.setItem('defeitos', defeitos);
//descpsicologica
descpsicologica = document.getElementById("descpsicologica").value;
localStorage.setItem('descpsicologica', descpsicologica);
//altura
altura = document.getElementById("altura").value;
localStorage.setItem('altura', altura);
//peso
peso = document.getElementById("peso").value;
localStorage.setItem('peso', peso);
//cabelos
cabelos = document.getElementById("cabelos").value;
localStorage.setItem('cabelos', cabelos);
//olhos
olhos = document.getElementById("olhos").value;
localStorage.setItem('olhos', olhos);
//braco
braco = document.getElementById("braco").value;
localStorage.setItem('braco', braco);
//outros
outros = document.getElementById("outros").value;
localStorage.setItem('outros', outros);
//ppbase
ppbase = document.getElementById("ppbase").value;
localStorage.setItem('ppbase', ppbase);
//descfisica
descfisica = document.getElementById("descfisica").value;
localStorage.setItem('descfisica', descfisica);


salvar()

console.log("Dados guardados!")
}

function salvar() {
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
    &ltdiv title="Graduação"&gt&lti class="fas fa-user-graduate"&gt&lt/i&gt Graduação&lt/div&gt
    &ltdiv title="Idade"&gt&lti class="fas fa-baby"&gt&lt/i&gt ${idade}&lt/div&gt
    &ltdiv title="Aniversário"&gt&lti class="fas fa-calendar-alt"&gt&lt/i&gt ${aniversario}&lt/div&gt
    &ltdiv title="Estado"&gt&lti class="fas fa-smile"&gt&lt/i&gt Estado&lt/div&gt
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
    
    &ltdiv class="dados2"&gt&ltdiv class="titdaficha"&gtCARVED MY CURE WITH A BLADE THAT LEFT ME IN SCARS
    NOW, EVERY TIME I'M WEAK, WORDS SCREAM FROM MY ARMS&lt/div&gt
    &ltdiv class="histdopersonagem" style="margin: 0px -15px;"&gt&ltb&gt50 DG - Início&lt/b&gt
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt tincidunt turpis, in consectetur nulla ultricies ac. Mauris neque orci, fermentum quis sapien a, porta volutpat mauris. Morbi eu finibus nibh. Phasellus vel condimentum eros. Maecenas fermentum, leo non mattis convallis, nunc sem auctor nisl, non dictum nisi turpis a quam. Donec nec sapien ac nibh vestibulum elementum eu imperdiet tortor. Quisque condimentum placerat justo quis feugiat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In ultrices, nibh non dignissim venenatis, libero enim pretium velit, fringilla gravida nibh orci id eros. Aenean mollis ipsum et mi elementum, in consequat tortor mollis. Donec nec felis viverra ante bibendum scelerisque sed nec magna. Nullam malesuada orci sem, eu sollicitudin leo sollicitudin vel. Nullam tempor venenatis consequat. Donec in consequat erat, ut maximus mauris. Etiam libero eros, sodales et posuere eget, tincidunt nec nibh. Nam feugiat turpis id augue vestibulum, sit amet euismod est molestie.&lt/div&gt&lt/div&gt
    
    &ltdiv class="dados3"&gt&ltdiv class="dadosdopersonagem2"&gt&ltdiv1&gtDatabook&lt/div1&gt
    &ltdiv title="Ninjutsu"&gt&lti class="fas fa-user-ninja"&gt&lt/i&gt &ltc&gt[00]&lt/c&gt Ninjutsu&lt/div&gt
    &ltdiv title="Genjutsu"&gt&lti class="fas fa-user-ninja"&gt&lt/i&gt &ltc&gt[00]&lt/c&gt Genjutsu&lt/div&gt
    &ltdiv title="Taijutsu"&gt&lti class="fas fa-user-ninja"&gt&lt/i&gt &ltc&gt[00]&lt/c&gt Taijutsu&lt/div&gt
    &ltdiv title="Inteligência"&gt&lti class="fas fa-user-ninja"&gt&lt/i&gt&ltc&gt[00]&lt/c&gt Inteligência&lt/div&gt
    &ltdiv title="Força"&gt&lti class="fas fa-user-ninja"&gt&lt/i&gt &ltc&gt[00]&lt/c&gt Força&lt/div&gt
    &ltdiv title="Velocidade"&gt&lti class="fas fa-user-ninja"&gt&lt/i&gt &ltc&gt[00]&lt/c&gt Velocidade&lt/div&gt
    &ltdiv title="Stamina"&gt&lti class="fas fa-user-ninja"&gt&lt/i&gt &ltc&gt[00]&lt/c&gt Stamina&lt/div&gt
    &ltdiv title="Selos"&gt&lti class="fas fa-user-ninja"&gt&lt/i&gt &ltc&gt[00]&lt/c&gt Selos&lt/div&gt
    
    &ltdiv title="Regeneração"&gt&lti class="fas fa-user-ninja"&gt&lt/i&gt &ltc&gt[00]&lt/c&gt Regeneração&lt/div&gt
    &ltdiv title="Recuperação"&gt&lti class="fas fa-user-ninja"&gt&lt/i&gt &ltc&gt[00]&lt/c&gt Recuperação&lt/div&gt
    &ltdiv title="Sensoriamento"&gt&lti class="fas fa-user-ninja"&gt&lt/i&gt &ltc&gt[00]&lt/c&gt Sensoriamento&lt/div&gt
    &ltdiv title="Shurikenjutsu"&gt&lti class="fas fa-user-ninja"&gt&lt/i&gt &ltc&gt[00]&lt/c&gt Shurikenjutsu&lt/div&gt
    &ltdiv title="Cura"&gt&lti class="fas fa-user-ninja"&gt&lt/i&gt &ltc&gt[00]&lt/c&gt Cura&lt/div&gt
    &ltdiv title="Abosorção"&gt&lti class="fas fa-user-ninja"&gt&lt/i&gt &ltc&gt[00]&lt/c&gt Absorção&lt/div&gt
    &ltdiv title="Ninshu"&gt&lti class="fas fa-user-ninja"&gt&lt/i&gt &ltc&gt[00]&lt/c&gt Ninshu&lt/div&gt
    &ltdiv title="Combate"&gt&lti class="fas fa-user-ninja"&gt&lt/i&gt &ltc&gt[00]&lt/c&gt Combate&lt/div&gt
    &ltdiv title="Ilusão"&gt&lti class="fas fa-user-ninja"&gt&lt/i&gt &ltc&gt[00]&lt/c&gtIlusão&lt/div&gt
    
    &ltdiv title="Total"&gt&lti class="fas fa-user-ninja"&gt&lt/i&gt &ltc&gt[00]&lt/c&gtTotal&lt/div&gt
    &ltdiv title="Extras"&gt&lti class="fas fa-user-ninja"&gt&lt/i&gt &ltc&gt[00]&lt/c&gt Extras&lt/div&gt
    &ltdiv title="Adquiridos"&gt&lti class="fas fa-user-ninja"&gt&lt/i&gt &ltc&gt[00]&lt/c&gt Adquiridos&lt/div&gt
    &lt/div&gt
    
    &ltdiv class="dadosdopersonagem3-2"&gt&ltb&gtQualidades e Defeitos&lt/b&gt
    
    &lttable&gt&lttr&gt&lttd&gt&ltdiv class="qualidades"&gt&ltb&gt+&lt/b&gt Qualidade
    &ltb&gt+&lt/b&gt Qualidade
    &ltb&gt+&lt/b&gt Qualidade
    &ltb&gt+&lt/b&gt Qualidade
    &ltb&gt+&lt/b&gt Qualidade&lt/div&gt&lt/td&gt
    &lttd&gt&ltdiv class="defeitos"&gt&ltb&gt—&lt/b&gt Defeitos
    &ltb&gt—&lt/b&gt Defeitos
    &ltb&gt—&lt/b&gt Defeitos
    &ltb&gt—&lt/b&gt Defeitos
    &ltb&gt—&lt/b&gt Defeitos
    &ltb&gt—&lt/b&gt Defeitos&lt/div&gt&lt/td&gt&lt/tr&gt&lt/table&gt
    
    &ltb&gtNaturezas e Particularidades&lt/b&gt
    [b]Primeira Natureza:[/b] --.
    [b]Segunda Natureza:[/b] --.
    [b]Terceira Natureza:[/b] --.
    [b]Kekkei Genkai Elemental:[/b] --.
    [b]Afinidade Elemental:[/b]
    
    [b]Primeira Habilidade:[/b] --.
    [b]Segunda Habilidade:[/b] --.
    [b]Primeira Especialidade:[/b] --.
    [b]Segunda Especialidade:[/b] --.
    [b]Transplantes:[/b] --.
    [b]Habilidade Única:[/b] --.
    [b]Pacto de Sangue:[/b] --.
    [b]Limite de Jutsus:[/b] --.
    
    &ltb&gtBolsa de Armas (20)&lt/b&gt
    + Vazia
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
    &ltb&gtPlayer Off:&lt/b&gt  / &ltb&gtContatos:&lt/b&gt &lt/div&gt&lt/div&gt&lt/center&gt`

}

