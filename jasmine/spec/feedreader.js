/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        var i;
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('Url to be defined as well as non-empty', function() {
            for(i=0;i<allFeeds.length;i++){
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });
        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('Url to be defined as well as non-empty', function() {
            for(i=0;i<allFeeds.length;i++){
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
         });
    });
    /* TODO: Write a new test suite named "The menu" */
    describe('The menu',function(){
        var bodyRef = $('body');     
        var iconLink = $('.menu-icon-link');   

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('Menu should be hidden by default',function() {
            expect(bodyRef.hasClass('menu-hidden')).toBe(true);
        });           
         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('Displays on single click and hides on double click',function(){
            iconLink.click();
            expect(bodyRef.hasClass('menu-hidden')).toBe(false); 
            iconLink.click();
            expect(bodyRef.hasClass('menu-hidden')).toBe(true); 
        });
    });
    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries',function(){
        var feedLength = $('.feed');
        var entryLength = $('.entry');
        var i=0;
        beforeEach(function(complete){
            loadFeed(i,function(){
                complete();
            });
        });
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        it('loadFeed completes work with at least single entry',function(complete){
            expect(feedLength.length).not.toBe(true);
            expect(entryLength.length).not.toBe(true);
            complete();
        });
   });
    /* TODO: Write a new test suite named "New Feed Selection"
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        describe('New Feed Selection',function(){
            var listbefore;
            var listafter;
            var feedlist = $('.feed');
            var i=0;
            beforeEach(function(complete){
                loadFeed(i,function(){
                    listbefore = feedlist.html();
                    loadFeed(i+1,function(){
                        listbefore = feedlist.html();
                        complete();
                    });  
                });
            });
            it('Content feed change', function(){
               expect(listbefore).not.toBe(listafter);
            });
        });
}());
