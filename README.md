# Netcompany After Dark tilmeldings-seed (Sane edition)

## Tjek koden ud
Intet redundant software er nødvendigt for at kunne udvikle og bygge projektet! Du skal kun bruge [Git] til at hente projektet. 

[1]: http://git-scm.com/downloads           "Git"

Find et sted på din harddisk, hvor du projektet liggende. I dette eksempel vælger vi, at tjekke det ud i mappen `c:\development`.

Åben din kommandoprompt, navigér til `c:\development` og indtast følgende kommando:

```
git clone https://github.com/njjohansen/AfterDarkSaneEnrollment
```

## Opsætning af intranettet

På intranettet er der brug for følgende ting:

1.    Opret en custom SP liste til at indeholde tilmeldinger. Dette kan evt. gøres på din mysite (ex. `https://intranet.netcompany.com/personal/<initialer>/Lists/`, eller et andet sted hvor du har skriverettigheder). 

2.    Rediger permissions, så alle kan skrive i listen. Hvis permissions ikke er tilstrækkelige vil dit tilmeldingswebsite ikke virke for alle. 
..* List settings -> 
..* Permissions for this list -> 
..* Actions -> 
..* Edit Permissions -> 
..* Giv authenticated users contribute rettigheder

3.    Modificer default viewet i listen til, at have kolonnen `Created by`. Det er vigtigt at dette bliver gjort, da app'en ellers ikke kan se hvem der allerede er tilmeldt.

4.    Opret et Document Library til at indeholde tilmeldingssitet.

### Konfigurer projektet gennem `appSettings.js`

 Værdierne i `appSettings.js` fortæller applikationen, hvilken SP liste der er tale om mv.

1.    Åbn filen `scripts/appSettings.js`, og redigér følgende værdier så de passer med dit tilmeldingswebsite:
 
 <table>
  <tr>
    <th>Key</th><th>Beskrivelse</th>
  </tr>
  <tr>
    <td>webUrl</td>
    <td>
      URL'en til listen - dog uden listens navn. 
      Eksempel: `https://intranet.netcompany.com/personal/joj/`
    </td>
  </tr>
  <tr>
    <td>listName</td>
    <td>
      Navnet på den liste, hvor tilmeldinger skal registreres. 
      Eksempel `AfterDarkRoyaleTilmeldinger`
    </td>
  </tr>
</table>  

## Deployering og test på intranettet

Intranettet kører SharePoint 2007, og tanken med dette projekt er, at integrere med AD'et således at vi let og elegant har den ansattes identitet til rådighed, ligesom vi har en database (SharePoint-liste) til, at gemme vores tilmeldinger. 

1.    Når dit dokumentbibliotek er oprettet, skal du åbne dokumentbiblioteket i stifinderen (dette skal gøres gennem IE).

2.    Kopier nu hele projektet fra e.g. `c:\development\` til dokumentetbiblioteket. Nu er projektet deployeret og vi har adgang til at rette i det gennem f.eks. Sublime, Notepad++ etc. :)! 

3.    Test det ved at navigere din browser til e.g.:
      
```
https://intranet.netcompany.com/personal/joj/AfterDarkRoyaleTilmeldinger/index.html
```

*     Du kan nu tilpasse tilmeldingssiden til dit arrangement. God fornøjelse!

## Godt at vide

Projektet benytter følgende javascript frameworks:
  * [angularjs](http://angularjs.org/),
  * [jquery](http://jquery.com/)

Du behøver ikke kendskab til disse teknologier for at tilpasse tilmeldingssiden.

Spørgsmål kan rettes til joj@netcompany.com
